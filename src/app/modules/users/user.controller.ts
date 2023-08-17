import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.services";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { ...userData } = req.body;

    const result = await UserService.createUser(userData);

    res.status(200).json({
      success: true,
      message: "User createed successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const result = await UserService.getSingleUser(id);

    res.status(200).json({
      success: true,
      message: "SingleUser Rittrip successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.getAllUser();

    res.status(200).json({
      success: true,
      message: "User Rittrip successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await UserService.updateUser(id, req.body);

    res.status(200).json({
      success: true,
      message: "User updateUser successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await UserService.deleteUser(id);

    res.status(200).json({
      success: true,
      message: "User delete successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  createUser,
  getSingleUser,
  getAllUser,
  updateUser,
  deleteUser,
};
