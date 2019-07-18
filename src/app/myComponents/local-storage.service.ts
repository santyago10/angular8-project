import { Injectable } from "@angular/core";
import {IUser} from "./IUser.interface";

export class LocalStorageService{
    users:Array<IUser>=[];
    isExist:boolean;
    user:IUser;
    empty:boolean;
    password:boolean;

    

    registration(user){
        if(this.users.length==0)
        {
            this.empty=true;
        }
        else
        {
            this.empty=false;
        }
        if(user.password==user.repeatPassword)
            this.password=true;
            else 
            this.password=false;
        if(this.empty==true && this.password==true)
        {
            this.users.push(user);
            localStorage.setItem("users",JSON.stringify(this.users));
            alert("Пользователь "+user.mail+" успешно зарегистрирован");
        }
        else
        {
            for(var i=0;i<this.users.length;i++)
            {
                if(this.users[i].mail==user.mail){
                this.isExist=true;
                break;
                }
                else 
                this.isExist=false;
                debugger;

            }
        if(this.isExist==true)
        {
            alert("Вы уже зарегистрированы");
        }
        else
        {
            
          
             
            
            if(this.password==false)
            alert("Пароли не совпадают");
            else
            {
            this.users.push(user);
            localStorage.setItem("users",JSON.stringify(this.users));
            alert("Пользователь "+user.mail+" успешно зарегистрирован");  
            }
        }
    }
    }
          
       
         
    logIn(inputValue:{logInMail:string,logInPassword:string}){
        let password;
       for(var i=0;i<this.users.length;i++)
       { 
           if(this.users[i].mail===inputValue.logInMail && this.users[i].password===inputValue.logInPassword){
           this.isExist=true;
           password=true;
           break;
           }
           else{
               if(this.users[i].mail!==inputValue.logInMail)
               {
                   this.isExist=false;
               }
               else
               {
                   if(this.users[i].password!==inputValue.logInPassword)
                   {
                       password=false;
                   }
                   else
                   password=true
                }
            }        
        }
       if(this.isExist===true){
        alert("Вход пользователем "+inputValue.logInMail+" выполнен успешно");
       }
       
       else
       {
           if(password==false)
           alert("Пароль введён не верно");
           else{
               alert("Вы не зарегистрированы");
           }    
        }
       
       
          
    }
    
    
}