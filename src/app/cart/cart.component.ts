import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../data/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  fullprice:any=""
  pdata:any=[]
  userid:any=""
  constructor(private ds:ServiceService,private route:Router){}
  ngOnInit(): void {
    this.cartitems()
  }
  cartitems(){
    if(localStorage.getItem("id")){
      this.userid=localStorage.getItem("id")
      this.ds.getcart(this.userid).subscribe({
        next:(result:any)=>{
          this.pdata=result.message
          this.ds.totalprice(this.userid).subscribe({
            next:(result:any)=>{
              this.fullprice=result.message
       
              
            },
            error:(result:any)=>{
              alert(result.error.message)
            }
          })
          
        }
      })


    }

  }
  decrement(id:any){
    this.ds.decrement(id).subscribe({
      next:(result:any)=>{
   this.cartitems()
   
  
   this.ds.cartupdate()
      },error:(result:any)=>{
     this.remove(id)
        this.ds.cartupdate()
      }
    })

  }
  increment(id:any){
    this.ds.increment(id).subscribe({
      next:(result:any)=>{
   this.cartitems()
        
      },error:(result:any)=>{
      
        
      }
    })

  }
  remove(id:any){
this.ds.remove(id).subscribe({
  next:(result:any)=>{
    this.cartitems()
    this.ds.cartupdate()
       }
})
  }
  payment(fullprice:any){
this.route.navigateByUrl("payment")
  }


}
