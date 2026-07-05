import prisma from "../config/prisma";

export const getAllUsersService = async () => {
  return await prisma.user.findMany();
};

export const createUserService = async (
  fullName: string,
  email: string,
  password: string,
) => {
  return await prisma.user.create({
    data: {
      fullName,
      email,
      password,
    },
  });
};
