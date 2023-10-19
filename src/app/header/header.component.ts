import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../data/service.service';
import { Router } from '@angular/router';
import { TmplAstRecursiveVisitor } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  count:any=""
  id:any=""
  login:any=false
    constructor(private ds:ServiceService,private router:Router){}
  ngOnInit(): void {
    if(localStorage.getItem("id"))
 {     this.ds.cartcount.subscribe((data:any)=>{
        this.count=data  
        
      })
      this.ds.loged.subscribe((logdata:any)=>{
        this.login=logdata
      })}


  }
  cart(){
    if(localStorage.getItem("id")){
      this.id=localStorage.getItem("id")
this.router.navigateByUrl('cart/'+this.id)
    }
  }
wish(){
  this.router.navigateByUrl(`wishlist`)

}
logout(){
  if(localStorage.getItem("id")){
    this.ds.loged.next(false)
    localStorage.removeItem("id")
    this.router.navigateByUrl("")
  }

}
}
