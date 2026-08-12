import z from "zod";

export const createUserSchema = z.object({
    // id: z.number(),
    fullname: z.string().min(3, { message: "FullName should be at least 3char" }),
    email: z.email({ message: "plz enter valide email" }),
    password: z.string().min(6, { message: "atleast 6 char should be " }),
    role: z.enum(["CANDIDATE", "RECRUITER"]).optional(),

})
export const loginUserSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});