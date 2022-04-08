import { Router, Request, Response } from "express"
import {createUser,getAllUsers} from '../../controllers/user.controllers'




const userRoutes = Router()

userRoutes.post("/", createUser)
userRoutes.get("/",getAllUsers)


export default userRoutes
