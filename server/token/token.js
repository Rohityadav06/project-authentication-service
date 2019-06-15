var jwt= require("jwt-simple");
    module.exports = function(arg1,arg2){
    return jwt.encode(arg1,arg2);
}