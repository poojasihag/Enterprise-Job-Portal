import type { Request, Response } from "express";
import * as usersService from "./users.service.ts";
import { createUserSchema,   loginUserSchema } from "./users.validation.ts";



export const create = async (req: Request, res: Response) => {
  

  const result = createUserSchema.safeParse(req.body);

  if (!result.success) {
    console.log(result.error.issues);

    return res.status(400).json({

      message: "Validation Failed",
      errors: result.error.issues,
    });
  }

  // Validated data
  const user = await usersService.create(result.data);

  return res.status(201).json(user);
};
export const login = async (req: Request, res: Response) => {
  try {
    const result = loginUserSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: "Validation Failed",
        errors: result.error.issues,
      });
    }

    const { email, password } = result.data;

    const resultLogin = await usersService.login(email, password);

    return res.status(200).json({
      message: "Login successful",
      ...resultLogin,
    });
  } catch (error) {
    console.error("LOGIN ERROR:", error);

    return res.status(401).json({
      message: "Invalid email or password",
    });
  }
};


export const getAll = async (
  req: Request,
  res: Response
) => {
  const user = await usersService.getAll();

  res.status(200).json(user);
};
export const update = async (
  req: Request,
  res: Response
) => {
  const user = await usersService.update(req.body);

  res.status(201).json(user);
};
export const deleteUser = async (
  req: Request,
  res: Response
) => {
  const user = await usersService.deleteUser(req.body);

  res.status(201).json(user);
};

