import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { ServiceService } from '../data/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit{
  pswCheck:any=false
  usersignupForm=this.fb.group({
    email:[''],
    psw:[''],
    cpsw:['']
  })
  constructor(private fb:FormBuilder,private ds:ServiceService,private route:Router){}
  ngOnInit(): void {
    
  }
user(){
  var email=this.usersignupForm.value.email
var psw=this.usersignupForm.value.psw
var cpsw=this.usersignupForm.value.cpsw

if(psw==cpsw)   

{    
  this.pswCheck=false
this.ds.signup(email,psw).subscribe({
  next:(result:any)=>{
    alert(result.message)
this.route.navigateByUrl("user-login")
  },
  error:(result:any)=>{
    alert(result.error.message)
  }
})
}
else{
  this.pswCheck=true
}
}
}
