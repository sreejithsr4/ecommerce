import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../data/service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
  addproduct=this.fb.group({
    pname:[''],
    price:[''],
    image:[''],
    description:[''],
  count:[''],
  rating:['']

  
  })
  constructor(private fb:FormBuilder,private route:Router,private ds:ServiceService){}
ngOnInit(): void {
  
}
add(){
  var path = this.addproduct.value
  var pname=path.pname
  var price=path.price
  var image= path.image
  var description=path.description
  var rating=path.rating
  var count =path.count
this.ds.addproduct(pname,price,image,rating,description,count).subscribe({
  next:(result:any)=>{
    alert(result.message)
    this.addproduct.reset()
    this.route.navigateByUrl("admin-product")
  },
  error:(result:any)=>{
    alert(result.error.message)
  }
})
}

}
