import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import{LocalStorageService} from "./local-storage.service";

@Component({
    selector:"regist",
    templateUrl:"./regist.component.html",
    styleUrls:["./regist.component.scss"]
})
export class RegistComponent{
    registForm:FormGroup
constructor(private localStore:LocalStorageService){
this.createForm();
}
createForm(){
    this.registForm=new FormGroup({
        name:new FormControl("",Validators.required),
        mail:new FormControl("",Validators.required),
        password:new FormControl("",Validators.required),
        repeatPassword:new FormControl("",Validators.required)
    });
}
submit(){
    if(this.registForm.status=="VALID"){
        this.localStore.registration(this.registForm.value);
    }
    else
    alert("Invalid");
}
}