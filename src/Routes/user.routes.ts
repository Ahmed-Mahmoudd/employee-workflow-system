import { Router } from "express";
import { getUsers } from "../Controllers/user.controller";
import { createUser } from "../Controllers/user.controller";

const router = Router();

router.get("/", getUsers);
router.post("/", createUser);

export default router;
