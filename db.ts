import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const {
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_DB,
    POSTGRES_TEST_DB,
    POSTGRES_PORT,
    POSTGRES_TEST_PORT,
    POSTGRES_HOST
} = process.env

const pool =new pg.Pool({ 
    user: POSTGRES_USER,
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    password: POSTGRES_PASSWORD,
    port: Number(POSTGRES_PORT),
});

export default pool;



