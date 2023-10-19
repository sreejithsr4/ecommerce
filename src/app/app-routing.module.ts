import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditComponent } from './edit/edit.component';
import { SingleComponent } from './single/single.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [{path:"",component:LandingComponent},
{path:"admin-login",component:AdminloginComponent},
{path:"admin-home",component:AdminhomeComponent},
{path:"admin-user",component:AdminUserComponent},
{path:"admin-product",component:AdminProductComponent},
{path:"add-product",component:AddProductComponent},
{path:"edit-product/:id",component:EditComponent},
{path:"single/:id",component:SingleComponent},
{path:"user-login",component:UserLoginComponent},
{path:"user-signup",component:UserSignupComponent},
{path:"cart/:id",component:CartComponent},
{path:"wishlist",component:WishlistComponent},
{path:"payment",component:PaymentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
