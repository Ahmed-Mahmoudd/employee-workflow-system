import prisma from "../config/prisma";

export const getAllUsersService = async () => {
  return await prisma.user.findMany();
};
