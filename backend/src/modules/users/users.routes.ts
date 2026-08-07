// define routes
import { Router } from "express";
import * as usersController from "./users.controller.ts";

const router = Router();

router.post("/create", usersController.create);

router.get("/getAll", usersController.getAll);

router.patch("/update", usersController.update);
router.delete("/deleteUser", usersController.deleteUser);

export default router;