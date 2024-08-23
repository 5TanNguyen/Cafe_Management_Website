const mysql = require('mysql')
// import mysq from "mysql";

let mydb = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'node_cafe',
        port: 3306,
        connectionLimit: 10
    }
);

// db.getConnection(()=>
//     {
//         console.log('Connect to db successfully');
//     }
// )


module.exports=mydb;