import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../data/service.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit{
  userdatas:any=""
  constructor (private ds:ServiceService){}
  ngOnInit(): void {
    this.userdata()
    
  }
  userdata(){
    this.ds.userdata().subscribe({
      next:(result:any)=>{
        this.userdatas=result.message
        
      }
    })

  }
  delete(id:any){

    this.ds.deleteuser(id).subscribe({
      next:(result:any)=>{
        alert(result.message)
        this.userdata()
      }
    })
  }
}
