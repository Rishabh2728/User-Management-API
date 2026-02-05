import express from "express";

import { createUser, getUsers, deleteUser, updateUser } from "../controllers/user.controller.js";
// import { validateUser } from "../middlewares/auth.js";
import { getUserByID } from "../middlewares/auth.js";
const router = express.Router();

router.get("/",getUserByID, getUsers);

router.post("/", createUser);

router.patch("/:id",updateUser);

router.delete("/:id", deleteUser);



export default router;