import { Router } from "express";
import { getUsers } from "../Controllers/user.controller";

const router = Router();

router.get("/", getUsers);

export default router;
