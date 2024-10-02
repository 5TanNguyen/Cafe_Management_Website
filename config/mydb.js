const mysql = require('mysql')
// import mysq from "mysql";

// let mydb = mysql.createConnection(
//     {
//         host: 'localhost',
//         user: 'root',
//         password: 'Redtoso5',
//         database: 'node_cafe',
//         port: 3306,
//         connectionLimit: 10
//     }
// );

// mydb.getConnection(()=>
//     {
//         console.log('Connect to db successfully');
//     }
// )

const mydb = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Redtoso5",
    database: "node_cafe",
    port: 3306
});

mydb.getConnection((err, con)=>{
    if (err) {
        console.log(`Could not connect to the database ${err}`)
    }else{
        console.log("Succesfully connected to the database")
    }
});


module.exports=mydb;