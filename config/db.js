const mysql = require('mysql')

const db = mysql.createPool(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'tn408',
        port: 3306
    }
);

db.getConnection(()=>
    {
        console.log('Connect to db successfully');
    }
)


module.exports=db;