import { Router, Request, Response } from "express"
import {createUser,getAllUsers,getUserById} from '../../controllers/user.controllers'




const userRoutes = Router()
//create user route
userRoutes.post("/", createUser)
//get all users route
userRoutes.get("/",getAllUsers)
//get user by id route
userRoutes.get("/:id",getUserById)


export default userRoutes
