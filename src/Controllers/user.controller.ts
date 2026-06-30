import { Response, Request } from "express";
import { getAllUsersService } from "../Services/user.service";

export const getUsers = (req: Request, res: Response) => {
  const users = getAllUsersService();
  res.json(users);
};
