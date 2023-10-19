import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit{
  constructor(private route:Router){

  }
  ngOnInit(): void {
    if(!localStorage.getItem("uname")){
      this.route.navigateByUrl("")

    }
  }
adminUser(){
this.route.navigateByUrl("admin-user")
}
adminProduct(){
this.route.navigateByUrl("admin-product")
}
logout(){
  localStorage.removeItem("uname")
  this.route.navigateByUrl("")
}
}
