import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  acno=""
  psw=""
  data="Your Perfect Banking Partner"
  inputplaceholder="Account Number"
  usedDetails:any={
    1000:{acno:1000,username:"anu",password:"abc123",balance:0},
    1001:{acno:1001,username:"abhi",password:"abc123",balance:0},
    1002:{acno:1002,username:"adhi",password:"abc123",balance:0},
    1003:{acno:1003,username:"ebi",password:"abc123",balance:0},
  }
  constructor(){}
ngOnInit():void{}

login(){

}
acnochange(event:any){
 
  this.acno=event.target.value
  console.log(this.acno);
  

}
passwordchange(event:any){
    this.psw=event.target.value
    console.log(this.psw);
    
}

}
