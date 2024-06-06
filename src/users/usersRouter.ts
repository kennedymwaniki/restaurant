import { Hono } from "hono";
import { getUser, listUsers, newUser, updateUsers } from "./userController";

export const userRouter = new Hono();

// get users route
userRouter.get("/users", listUsers);
userRouter.get("/users/:id", getUser);
