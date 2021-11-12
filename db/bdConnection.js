import pool from './pool';

pool.on('connect', () => {
    console.log('connected to the db');
});

/**
 * Create User Table
 * CREATE TABLE test
 (id SERIAL PRIMARY KEY,
 name VARCHAR(100) UNIQUE NOT NULL,
 phone VARCHAR(100));
 */
const createUserTable = () => {
    const userCreateQuery = `CREATE TABLE IF NOT EXISTS users
  (id SERIAL PRIMARY KEY, 
  email VARCHAR(100) UNIQUE NOT NULL, 
  user_name VARCHAR(100), 
  role VARCHAR(100), 
  password VARCHAR(100) NOT NULL,
  created_on DATE NOT NULL)`;

    pool.query(userCreateQuery)
        .then((res) => {
            console.log(res);
            pool.end();
        })
        .catch((err) => {
            console.log(err);
            pool.end();
        });
};

/**
 * Create Tokens Table
 */
const createTokensTable = () => {
    const tokenCreateQuery = `CREATE TABLE IF NOT EXISTS tokens
    (id SERIAL PRIMARY KEY,
    token VARCHAR(100) NOT NULL,
    username VARCHAR(100) NOT NULL)`;

    pool.query(tokenCreateQuery)
        .then((res) => {
            console.log(res);
            pool.end();
        })
        .catch((err) => {
            console.log(err);
            pool.end();
        });
};


/**
 * Drop Users Table
 */
const dropUsersTable = () => {
    const usersDropQuery = 'DROP TABLE IF EXISTS users';
    pool.query(usersDropQuery)
        .then((res) => {
            console.log(res);
            pool.end();
        })
        .catch((err) => {
            console.log(err);
            pool.end();
        });
};

/**
 * Drop Tokens Table
 */
const dropTokensTable = () => {
    const tokensDropQuery = 'DROP TABLE IF EXISTS tokens';
    pool.query(tokensDropQuery)
        .then((res) => {
            console.log(res);
            pool.end();
        })
        .catch((err) => {
            console.log(err);
            pool.end();
        });
};

/**
 * Create All Tables
 */
const createAllTables = () => {
    createUserTable();
    createTokensTable();
};


/**
 * Drop All Tables
 */
const dropAllTables = () => {
    dropUsersTable();
    dropTokensTable();
};

pool.on('remove', () => {
    console.log('client removed');
    process.exit(0);
});


export {
    createAllTables,
    dropAllTables,
};

require('make-runnable');