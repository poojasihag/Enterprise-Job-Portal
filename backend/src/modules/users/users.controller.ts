// handle router (req and res)

import type { Request, Response } from "express";
import * as usersService from "./users.service.ts";
import { createUserSchema } from "./users.validation.ts";



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

// export const create = async (
//   req: Request,
//   res: Response
// ) => {

//     try {
        
//         const {data, error}= createUserSchema.safeParse(req.body)
//          console.log(data);
// } catch(error){
//   if(error instanceof z.ZodError){
//     console.log("error",error);
//     res.redirect( "/getAll")
//     error.issues; 
//     /* [
//       {
//         expected: 'string',
//         code: 'invalid_type',
//         path: [ 'username' ],
//         message: 'Invalid input: expected string'
//       },
//       {
//         expected: 'number',
//         code: 'invalid_type',
//         path: [ 'xp' ],
//         message: 'Invalid input: expected number'
//       }
//     ] */
//   }
// }
//     console.log(req.body)
//     // res.status
//   const user = await usersService.create(req.body);

//   res.status(201).json(user);
// };
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

