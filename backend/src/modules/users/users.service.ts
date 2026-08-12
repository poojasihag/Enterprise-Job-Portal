import { prisma } from "../../config/prisma.ts";
import * as usersRepository from "./users.repository.ts";
import bcrypt from "bcrypt";
import { generateToken } from "../../utils/jwt.ts";

export const create = async (data: any) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await prisma.user.create({
    data: {
      fullname: data.fullname,
      email: data.email,
      password: hashedPassword,
      role: data.role,
    },
  });

  return user;

};
export const login = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error("Invalid email or password");
  }

  const token = generateToken(user.id.toString());

  const { password: _, ...userWithoutPassword } = user;

  return {
    user: userWithoutPassword,
    token,
  };
};


export const getAll = async () => {

  // validation

  // hash password

  // create user

  return usersRepository.getAll();

};
export const update = async (data: any) => {

  // validation

  // hash password

  // create user

  return usersRepository.update(data.id, data);

};
export const deleteUser = async (data: any) => {

  // validation

  // hash password

  // create user

  return usersRepository.deleteUser(data.id);

};

