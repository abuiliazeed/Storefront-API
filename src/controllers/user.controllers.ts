import {NextFunction, Request,Response} from 'express'
import UserModel from '../models/user.model'

const userModel = new UserModel()

// create user function
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
// get all users function
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
// get user by id function
const getUserById = async (req:Request, res:Response, next : NextFunction) => {
    try {
        const user =await userModel.getUserById(Number(req.params.id))
        res.json({
            status:"success",
            data:{...user},
            message:"user retrieved successfully",
        })
    }catch (err) {
        next(err)
    }

}
    // update a user
const updateUser = async (req:Request, res:Response, next : NextFunction) => {
    try {
        const user =await userModel.updateUser(Number(req.params.id),req.body)
        res.json({
            status:"success",
            data:{...user},
            message:"user updated successfully",
        })
    }catch (err) {
        next(err)
    }
}

//delete a user
const deleteUser = async (req:Request, res:Response, next : NextFunction) => {
    try {
        const user =await userModel.deleteUser(Number(req.params.id))
        res.json({
            status:"success",
            data:{...user},
            message:"user deleted successfully",
        })
    }catch (err) {
        next(err)
    }
}




export  {createUser,getAllUsers,getUserById,updateUser,deleteUser}