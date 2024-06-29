import express from "express";
import { getUsers, addUser, updateUser } from "../controllers/user";

const router = express.Router();

router.get("/", getUsers);

router.post("/", addUser);

router.put("/:id", updateUser);

export default router