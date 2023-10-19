import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../data/service.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit{
  searchData:any=""

  allproducts:any=[]
  constructor(private ds:ServiceService){}
  ngOnInit(): void {
    this.ds.allproduct().subscribe({
      next:(result:any)=>{
        this.allproducts=result.products
   
        

      },
      error:(result:any)=>{
        alert(result.error.message)
      }
    })
  }
  accessData(event:any){
    this.searchData=event.target.value
    console.log(this.searchData);
  }
  

}
