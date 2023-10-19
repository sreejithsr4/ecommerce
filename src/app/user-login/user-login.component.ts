import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../data/service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{
  loginform=this.fb.group({
    email:[''],
    psw:['']
  })
  constructor(private route:Router,private fb:FormBuilder,private ds:ServiceService){}
  ngOnInit(): void {
    
  }
  user(){
    var email=this.loginform.value.email
    var psw=this.loginform.value.psw
    this.ds.ulogin(email,psw).subscribe({
      next:(result:any)=>{
        alert(result.message)
        localStorage.setItem("id",result.id)
        this.route.navigateByUrl("")
        this.ds.header()
      },
      error:(result:any)=>{
        alert(result.error.message)
      }
    })

  }
  signup(){
this.route.navigateByUrl("user-signup")
  }

}
