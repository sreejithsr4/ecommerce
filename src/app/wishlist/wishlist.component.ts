import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../data/service.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{
  userid:any=""
  wishdata:any=""
  constructor(private ds:ServiceService){}
  ngOnInit(): void {
    this.getwish()
  }
getwish(){
  if(localStorage.getItem("id")){
    this.userid=localStorage.getItem("id")
    this.ds.getwishlist(this.userid).subscribe({
      next:(result:any)=>{
        this.wishdata=result.message
      }
    })  
  }
  
  
}

  addcart(pid:any){
    if(localStorage.getItem("id")){
      var userid=localStorage.getItem("id")
  
     
      this.ds.addcart(userid,pid).subscribe({
        next:(result:any)=>{
          alert(result.message)
          this.ds.cartupdate()
          this.remove(pid)
  
        },
        error:(result:any)=>{
          alert(result.error)
        }
        
      })
  
  }
  }
  remove(pid:any){
    this.ds.wishremove(pid).subscribe({
      next:(result:any)=>{
        this.getwish()
        alert(result.message)
      }
    })

  }
}
