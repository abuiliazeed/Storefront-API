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

    // update a user

    // delete a user

    // authenticate a user

}

export default UserModel