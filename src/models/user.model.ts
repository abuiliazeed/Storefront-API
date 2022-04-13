/* eslint-disable no-useless-catch */
import User from '../types/user.type'
import dbclient from '../db/db'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config()

const hashPassword = (password: string) => {
  const salt = Number(process.env.SALT_ROUNDS)
  return bcrypt.hashSync(`${password}${process.env.BCRYPT_PASSWORD}`, salt)
}

class UserModel {
  // create a new user
  async createUser(newUser: User): Promise<User> {
    try {
      //open connection with database
      const connection = await dbclient.connect()
      //run query to insert new user
      const createUserQuery = `INSERT INTO users(firstname,lastname, email, password) VALUES($1, $2, $3, $4)
            RETURNING id,firstname,lastname,email,password`
      const result = await connection.query(createUserQuery, [
        newUser.firstname,
        newUser.lastname,
        newUser.email,
        hashPassword(newUser.password)
      ])
      //close connection
      connection.release()
      //return user
      return result.rows[0]
    } catch (err) {
      throw err
    }
  }
  // get all users
  async getAllUsers(): Promise<User[]> {
    try {
      //open connection with database
      const connection = await dbclient.connect()
      //run query to get all users
      const getAllUsersQuery = `SELECT * FROM users`
      const result = await connection.query(getAllUsersQuery)
      //close connection
      connection.release()
      //return users
      return result.rows
    } catch (err) {
      throw err
    }
  }

  // get a user by id
  async getUserById(id: number): Promise<User> {
    try {
      //open connection with database
      const connection = await dbclient.connect()
      //run query to get user by id
      const getUserByIdQuery = `SELECT * FROM users WHERE id = $1`
      const result = await connection.query(getUserByIdQuery, [id])
      //close connection
      connection.release()
      //return user
      return result.rows[0]
    } catch (err) {
      throw err
    }
  }

  // update a user
  async updateUser(id: number, user: User): Promise<User> {
    try {
      //open connection with database
      const connection = await dbclient.connect()
      //run query to update user
      const updateUserQuery = `UPDATE users SET firstname = $1, lastname = $2, email = $3, password = $4 WHERE id = $5 RETURNING id,firstname,lastname,email,password`
      const result = await connection.query(updateUserQuery, [
        user.firstname,
        user.lastname,
        user.email,
        hashPassword(user.password),
        id
      ])
      //close connection
      connection.release()
      //return user
      return result.rows[0]
    } catch (err) {
      throw err
    }
  }

  // delete a user
  async deleteUser(id: number): Promise<User> {
    try {
      //open connection with database
      const connection = await dbclient.connect()
      //run query to delete user
      const deleteUserQuery = `DELETE FROM users WHERE id = $1 RETURNING id,firstname,lastname,email,password`
      const result = await connection.query(deleteUserQuery, [id])
      //close connection
      connection.release()
      //return user
      return result.rows[0]
    } catch (err) {
      throw err
    }
  }

  // authenticate a user
  async authenticateUser(email: string, password: string): Promise<User | null> {
    try {
      const connection = await dbclient.connect()
      const sql = 'SELECT password FROM users WHERE email=$1'
      const result = await connection.query(sql, [email])
      if (result.rows.length) {
        const { password: hashPassword } = result.rows[0]
        const isPasswordValid = bcrypt.compareSync(
          `${password}${process.env.BCRYPT_PASSWORD}`,
          hashPassword
        )
        if (isPasswordValid) {
          const userInfo = await connection.query(
            'SELECT id, firstname, lastname, email FROM users WHERE email=($1)',
            [email]
          )
          return userInfo.rows[0]
        }
      }
      connection.release()
      return null
    } catch (error) {
      throw new Error(`Unable to login: ${(error as Error).message}`)
    }
  }

  // async authenticateUser(email: string, password: string): Promise<User | null> {
  //   try {
  //     //open connection with database
  //     const connection = await dbclient.connect()
  //     //select password using user email query
  //     const getPasswordQuery = `SELECT password FROM users WHERE email = $1`
  //     const result = await connection.query(getPasswordQuery, [email])

  //     //check if password is correct
  //     if (
  //       bcrypt.compareSync(`${password}${process.env.BCRYPT_PASSWORD}`, result.rows[0].password)
  //     ) {
  //       const userInfo = await connection.query('SELECT * FROM users WHERE email = $1', [email])
  //       //return user
  //       return userInfo.rows[0]
  //     } else {
  //       connection.release()
  //       console.log('Password is incorrect')
  //       //return null
  //       return null
  //     }
  //     //close connection
  //     connection.release()
  //   } catch (error) {
  //     throw new Error(`Unable to login: ${(error as Error).message}`)
  //   }
  // }
  //
}

export default UserModel
