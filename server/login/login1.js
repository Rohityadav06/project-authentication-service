var conn= require("../config/getconnetion");
connection= conn.getConnection();
connection.connect();
var prop =require("../config/properties");
var my_fun =require("../token/token")
var express= require("express")
var router=express.Router()
router.post("/",(req,res)=>{
    var uname=req.body.uname;
    var pass=req.body.pass;
    connection.query("select * from login where uname='"+uname+ "'and upwd='"+pass+"'",(err,recordsArray,fields)=>{
        if(recordsArray.length>0){
            var token =my_fun("hello","12345ABCDEF");
            prop.token=token;
            res.send({"login":"success","token":token});
        }else{
            res.send({"login":"fail","token":"fail"})
        }''
    });
});
module.exports=router;

