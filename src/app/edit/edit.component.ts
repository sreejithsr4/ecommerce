import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../data/service.service';
import { FormBuilder, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
pdata:any={}
pid:any=""

  constructor(private ds:ServiceService,private fb:FormBuilder,private ar:ActivatedRoute,private route:Router){}
ngOnInit(): void {
  this.ar.params.subscribe(data=>{
    this.pid=data["id"]
    console.log(this.pid);
    
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


  edit(){

  this.ds.editproduct(this.pid,this.pdata).subscribe({
    next:(result:any)=>{
      alert(result.message)
      this.route.navigateByUrl("admin-product")
    },
    error:(result:any)=>{
      alert(result.error.message)
    }
  })
  }
}
