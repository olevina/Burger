var mysql = require("mysql");
if (process.env.JAWSDB_URL) {
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
   }
   else{
    var connection = mysql.createConnection({
        host:"localhost",
        port:'3306',
        user:"root",
        password: "229535Jkz",
        database: "burgers_db"
    })
   }



connection.connect(function(err){
    if(err)throw err;
console.log("connected" + connection.threadId);

})

module.exports = connection;