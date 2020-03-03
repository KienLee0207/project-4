import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyAuctionComponent } from './my-auction/my-auction.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {MatDialogModule} from "@angular/material";
import {MatFormFieldModule} from '@angular/material/form-field';

const router : Routes = [
  // {path :'login', component : LoginComponent},
  {path :'', component : ProductComponent},
  {path :'login', component : LoginComponent},
  {path :'product-details', component :ProductDetailsComponent},
  {path :'my-auction', component :MyAuctionComponent},
  {path :'my-profile', component :MyProfileComponent},


  
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(router),
    CommonModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  exports : [RouterModule ]
})
export class AppRoutingModule { }
