import { HttpErrorResponse } from "@angular/common/http";
var errFun = (err:HttpErrorResponse)=>{
    if(err.error instanceof Error){
        console.log("Client Side Error !!!");
    }else{
        console.log("Server Side Error !!!");
    }
};
export default errFun;