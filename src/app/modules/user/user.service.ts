import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import { ILoginUser, ILoginUserResponse, IUser } from './user.interface';
import { User } from './user.model';

const createUser = async (payload: IUser): Promise<IUser> => {
  const isUserExist = await User.isUserExist(payload?.userName);

  if (isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'This userName already exist');
  }
  const result = await User.create(payload);
  return result;
};

const loginUser = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
  const { userName: name, password } = payload;

  const isUserExist = await User.isUserExist(name);

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'This userName does not exist');
  }

  if (
    isUserExist.password &&
    !(await User.isPasswordMatched(password, isUserExist.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
  }

  const { _id, userName, email } = isUserExist;
  const accessToken = jwtHelpers.createToken(
    { _id, userName, email },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  const refreshToken = jwtHelpers.createToken(
    { _id, userName, email },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );

  return {
    userName,
    email,
    _id: _id as string,
    accessToken,
    refreshToken,
  };
};

const getAllUsers = async (): Promise<IUser[]> => {
  const result = await User.find({});
  return result;
};

const getSingleUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findOne({ _id: id });
  return result;
};

export const UserService = {
  createUser,
  loginUser,
  getAllUsers,
  getSingleUser,
};
