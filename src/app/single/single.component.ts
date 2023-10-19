import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../data/service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit{
  pdata:any={}
  pid:any=""
constructor(private ds:ServiceService,private ar:ActivatedRoute,private route:Router){}
ngOnInit(): void {
  this.ar.params.subscribe(data=>{
    this.pid=data["id"]
    
    
  })
this.ds.getproduct(this.pid).subscribe({
  next:(result:any)=>{
    this.pdata=result.message

    
  },
  error:(result:any)=>{
    alert(result.error.message)
  }
})
}
usercheck(){
  if(localStorage.getItem("id")){
    var userid=localStorage.getItem("id")

    var pid=this.pid
    this.ds.addcart(userid,pid).subscribe({
      next:(result:any)=>{
        alert(result.message)
        this.ds.cartupdate()

      },
      error:(result:any)=>{
        alert(result.error)
      }
      
    })

  }
  else{
    alert("user not logged in")
    this.route.navigateByUrl("user-login")

  }

}
wish(){
  if(localStorage.getItem("id")){
    var userid=localStorage.getItem("id")

    var pid=this.pid
    const body= {userid,pid}
    this.ds.addwishlist(body).subscribe({
      next:(result:any)=>{
        alert(result.message)
        this.route.navigateByUrl(`wishlist`)
      },
      error:(result:any)=>{
        alert(result.error)
      }
      
    })

  }
  else{
    alert("user not logged in")
    this.route.navigateByUrl("user-login")

  }





}
}
