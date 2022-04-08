import User from "../types/user.type";
import dbclient from "../db/db";

class UserModel {
    // create a new user
    async createUser(newUser: User): Promise<User> {
        try {
            //open connection with database
            const connection = await dbclient.connect();
            //run query to insert new user
            const createUserQuery = `INSERT INTO users(firstname,lastname, email, password) VALUES($1, $2, $3, $4)
            RETURNING id,firstname,lastname,email,password`;
            const result = await connection.query(createUserQuery, [newUser.firstname, newUser.lastname, newUser.email, newUser.password]);
            //close connection
            connection.release();
            //return user
            return result.rows[0];
        } catch (err) {
            throw err;
        }
    }
    // get all users
    async getAllUsers(): Promise<User[]> {
        try {
            //open connection with database
            const connection = await dbclient.connect();
            //run query to get all users
            const getAllUsersQuery = `SELECT * FROM users`;
            const result = await connection.query(getAllUsersQuery);
            //close connection
            connection.release();
            //return users
            return result.rows;
        } catch (err) {
            throw err;
        }}

    // get a user by id
    async getUserById(id: number): Promise<User> {
        try {
            //open connection with database
            const connection = await dbclient.connect();
            //run query to get user by id
            const getUserByIdQuery = `SELECT * FROM users WHERE id = $1`;
            const result = await connection.query(getUserByIdQuery, [id]);
            //close connection
            connection.release();
            //return user
            return result.rows[0];
        } catch (err) {
            throw err;
        }
    }

    // update a user
    async updateUser(id: number, user: User): Promise<User> {
        try {
            //open connection with database
            const connection = await dbclient.connect();
            //run query to update user
            const updateUserQuery = `UPDATE users SET firstname = $1, lastname = $2, email = $3, password = $4 WHERE id = $5 RETURNING id,firstname,lastname,email,password`;
            const result = await connection.query(updateUserQuery, [user.firstname, user.lastname, user.email, user.password, id]);
            //close connection
            connection.release();
            //return user
            return result.rows[0];
        } catch (err) {
            throw err;
        }
    }
    

    // delete a user

    // authenticate a user

}

export default UserModel