import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string = "";
  pwd:string = "";
  users:any = [
    {'email':'abc@com.au','pwd':'123'},
    {'email':'abd@com.au','pwd':'123'},
    {'email':'abe@com.au','pwd':'123'},
  ];
  errormsg = "";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  signin(event:any){
    event.preventDefault();
    for(let i=0; i<this.users.length; i++){
      if(this.users[i].email == this.email && this.users[i].pwd == this.pwd){
        this.router.navigate(['account']);
      }
    }
    this.errormsg = "Your email or password is incorrect"
  };

}
