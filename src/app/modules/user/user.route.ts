import express from "express";
import { create,getUserById,getUsers } from "./user.controller";

const router = express.Router()
router.get('/',getUsers)
// router.get('/admins',getAdminUser)
router.post('/createUser',create)
router.get('/:id',getUserById)
export default router;