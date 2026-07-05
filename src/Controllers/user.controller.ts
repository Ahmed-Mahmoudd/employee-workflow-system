import { Request, Response } from "express";
import { getAllUsersService } from "../Services/user.service";
import { createUserService } from "../Services/user.service";

export const getUsers = async (req: Request, res: Response) => {
  const users = await getAllUsersService();
  res.json(users);
};

export const createUser = async (req: Request, res: Response) => {
  const { fullName, email, password } = req.body;
  const user = await createUserService(fullName, email, password);
  res.status(201).json(user);
};
