import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Data, Router } from '@angular/router';
import { ServiceService } from '../data/service.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit{

  
  adminLoginForm=this.fb.group({
    auname:[''],
    apsw:['']
  })
  constructor(private fb:FormBuilder,private route:Router,private ds:ServiceService){}
  ngOnInit(): void {
    
  }
  admin(){
    var uname=this.adminLoginForm.value.auname
    var psw=this.adminLoginForm.value.apsw

    
this.ds.login(uname,psw).subscribe({
      next:(result:any)=>{
        alert(result.message)
        this.route.navigateByUrl("admin-home")
        localStorage.setItem("uname",result.uname)
      },
      error:(result:any)=>{
        alert(result.message)
      }
    })
    
   

  }

}
