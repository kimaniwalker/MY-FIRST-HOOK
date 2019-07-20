const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'Kurstyn16',
    user: 'root',
    database: 'test',
    host: 'localhost',
    port: '3306'
});

let testdb = {};

testdb.all = () => {

    return new Promise((resolve, reject) => {

        pool.query(`SELECT * FROM chirps`, (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results);
        })

    })

};


testdb.one = (id) => {


    return new Promise((resolve, reject) => {

        pool.query(`SELECT * FROM chirps WHERE id = ?`, [id], (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results[0]);
        })

    })
}

module.exports = testdb;

//all one insert update delete