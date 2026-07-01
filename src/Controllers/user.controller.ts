import { Request, Response } from "express";
import { getAllUsersService } from "../Services/user.service";

export const getUsers = async (req: Request, res: Response) => {
  const users = await getAllUsersService();
  res.json(users);
};
