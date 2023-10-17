const mysql = require('mysql')

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Redtoso5',
        database: 'tn408',
        port: 3306,
        connectionLimit: 10
    }
);

// db.getConnection(()=>
//     {
//         console.log('Connect to db successfully');
//     }
// )


module.exports=db;