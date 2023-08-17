import User from "./user.modle";

const createUser = async (payload: IUser) => {
  const result = await User.create(payload);

  return result;
};

const getSingleUser = async (id: string) => {
  const result = await User.findById(id);
  return result;
};

const getAllUser = async () => {
  const result = await User.find();
  return result;
};
const updateUser = async (id: string, payload: IUser) => {
  const result = await User.findByIdAndUpdate(
    {
      _id: id,
    },
    payload,
    {
      new: true,
    }
  );

  return result;
};
const deleteUser = async (id: string) => {
  const result = await User.findByIdAndDelete(id);
  return result;
};

export const UserService = {
  createUser,
  getSingleUser,
  getAllUser,
  updateUser,
  deleteUser,
};
