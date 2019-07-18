import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalStorageService } from './local-storage.service';
import {IUser} from "./IUser.interface";

@Component({
    selector:"login",
    templateUrl:"./logIn.component.html",
    styleUrls:["./logIn.component.scss"]
})
export class LoginComponent{
    logInForm:FormGroup;
   
constructor(private localStore:LocalStorageService){
    this.createForm();
    
}
createForm():void{
    this.logInForm=new FormGroup({
        logInMail:new FormControl("",[Validators.required,Validators.minLength(3)]),
        logInPassword:new FormControl("",Validators.required),
    });
}
submit(){
        this.localStore.logIn(this.logInForm.value);
   
    
}

}