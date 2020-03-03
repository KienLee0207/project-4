import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import {MatDialogModule, ShowOnDirtyErrorStateMatcher, ErrorStateMatcher} from "@angular/material";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule,MatSelectModule,MatFormFieldModule,MatTabsModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import { ProductComponent } from './product/product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MyAuctionComponent } from './my-auction/my-auction.component';
import { MatSliderModule } from '@angular/material/slider';
import { MyProfileComponent } from './my-profile/my-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ProductComponent,
    ListProductComponent,
    ProductDetailsComponent,
    MyAuctionComponent,
    MyProfileComponent
  ],
  imports: [
    SlickCarouselModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatTabsModule,
  ],
  providers: [
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent],
  entryComponents :[
    LoginComponent,
  ]
})
export class AppModule { }
