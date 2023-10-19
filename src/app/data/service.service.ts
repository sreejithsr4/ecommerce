import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  cartcount=new BehaviorSubject(0)
  loged= new BehaviorSubject(false)
  uid:any=""

  constructor(private http:HttpClient) { 
this.cartupdate()
this.header()
  }
  baseurl:any="https://ecommerce-server-duis.onrender.com"
  cartupdate(){
    if(localStorage.getItem("id")){
      this.uid=localStorage.getItem("id")
      this.http.get(`${this.baseurl}/ecommerce/cart-count/${this.uid}`).subscribe({
        next:(result:any)=>{
          
          
this.cartcount.next(result.message)
        }
      })

    }
  }
  header(){
    if(localStorage.getItem("id")){
      this.loged.next(true)
    }
  }

 
  login(uname:any,psw:any){
   const bodydata={uname,psw}
   return this.http.post(`${this.baseurl}/ecommerce/admin/login`,bodydata)

  }
  addproduct(pname:any,price:any,image:any,rating:any,description:any,count:any){
    const bodydata={pname,price,image,rating,description,count}
    return this.http.post(`${this.baseurl}/ecommerce/admin/add-product`,bodydata)
  }
  allproduct(){
    return this.http.get(`${this.baseurl}/ecommerce/admin/all-product`)
  }
  editproduct(id:any,body:any){
    return this.http.put(`${this.baseurl}/ecommerce/admin/edit-product/${id}`,body)
  }
  getproduct(id:any){
    return this.http.get(`${this.baseurl}/ecommerce/admin/get-product/${id}`)
  }
  delete(id:any){
    return this.http.delete(`${this.baseurl}/ecommerce/admin/product-delete/${id}`)
  }
  signup(email:any,psw:any){
    const bodydata={email,psw}
    return this.http.post(`${this.baseurl}/ecommerce/user/signup`,bodydata)
  }
  ulogin(email:any,psw:any){
    const bodydata={email,psw}
    return this.http.post(`${this.baseurl}/ecommerce/user/login`,bodydata)
  }
  addcart(userid:any,pid:any){
    const body={userid,pid}
    return this.http.post(`${this.baseurl}/ecommerce/user/add-cart`,body)
  }
  getcart(userid:any){
    return this.http.get(`${this.baseurl}/ecommerce/cart-list/${userid}`)
  }
  totalprice(userid:any){
    return this.http.get(`${this.baseurl}/ecommerce/cart/fullprice/${userid}`)
  }
  increment(id:any){
    return this.http.get(`${this.baseurl}/ecommerce/cart/increment/${id}`)
  }
  decrement(id:any){
    return this.http.get(`${this.baseurl}/ecommerce/cart/decrement/${id}`)

  }
  remove(id:any){
    return this.http.delete(`${this.baseurl}/ecommerce/cart/delete/${id}`)
}
addwishlist(body:any){
  return this.http.post(`${this.baseurl}/ecommerce/wishlist/add`,body)
}
getwishlist(userid:any){
  return this.http.get(`${this.baseurl}/ecommerce/wishlist/get/${userid}`)
}
wishremove(pid:any){
  return this.http.delete(`${this.baseurl}/ecommerce/wishlist/remove/${pid}`)
}
userdata(){
 return this.http.get(`${this.baseurl}/userdata`)
}
deleteuser(id:any){
  return this.http.delete(`${this.baseurl}/admin/user/delete/${id}`)
}
}
