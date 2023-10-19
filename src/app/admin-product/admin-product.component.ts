import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../data/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit{
  allproducts:any=[]
 
  constructor(private ds:ServiceService,private route:Router){}
  ngOnInit(): void {
    this.ds.allproduct().subscribe({
      next:(result:any)=>{
        this.allproducts=result.products
        console.log(this.allproducts);
        

      },
      error:(result:any)=>{
        alert(result.error.message)
      }
    })
    
  }

  AddProduct(){
this.route.navigateByUrl("add-product")
  }


editproduct(id:any){
this.route.navigateByUrl(`edit-product/${id}`)
}
deleteproduct(id:any){
  
  this.ds.delete(id).subscribe({
    next:(result:any)=>{
      alert(result.message)
      this.ds.allproduct().subscribe({
        next:(result:any)=>{
          this.allproducts=result.products
          console.log(this.allproducts);
          
  
        },
        error:(result:any)=>{
          alert(result.error.message)
        }
      })
    },
    error:(result:any)=>{
      alert(result.error.message)
    }
  })

}
home(){
  this.route.navigateByUrl("admin-home")
}
}


