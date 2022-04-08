import {NextFunction, Request,Response} from 'express'
import UserModel from '../models/user.model'

const userModel = new UserModel()


const createUser = async (req:Request, res:Response, next : NextFunction) => {
    try {
        const user =await userModel.createUser(req.body)
        res.json({
            status:"success",
            data:{...user},
            message:"user created successfully",
        })
    }catch (err) {
        next(err)
        }
    } 

const getAllUsers = async (req:Request, res:Response, next : NextFunction) => {
    try {
        const users =await userModel.getAllUsers()
        res.json({
            status:"success",
            data:{users},
            message:"users retrieved successfully",
        })
    }catch (err) {
        next(err)
        }
    }



export  {createUser,getAllUsers}