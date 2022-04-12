import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import Error from '../interfaces/error.interface'


dotenv.config()

const handleUnauthorizedError = (next: NextFunction) => {
    const error: Error = new ErrorEvent('Login Error: Please try again ')
        error.status = 401
        next(error)
}

const validateTokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try{
        // get authHeader
        const authHeader = req.get('Authorization')
        console.log(authHeader)

        // check authHeader validate
        if(authHeader){}

        // get value of token

        // check if it bearer token or not

        // verify token -- decode based on token secret

        // next()

        // failed to authenticate user

        // token type not bearer

        // no token provided
    
    }
    catch(error){
        handleUnauthorizedError(next)
    }
}

export default validateTokenMiddleware