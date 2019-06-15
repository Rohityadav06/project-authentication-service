var obj = require("./properties");
var mysql = require("mysql");
module.exports = {
    getConnection   :   ()=>{
        return mysql.createConnection({
            host:obj.host,
            user:obj.user,
            password:obj.password,
            database:obj.database
        });
    }
};