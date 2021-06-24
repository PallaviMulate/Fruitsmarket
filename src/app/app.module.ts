
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';
import { TopnavComponent } from './topnav/topnav.component';
import { FruitimagesComponent } from './fruitimages/fruitimages.component';
import { ImgheadComponent } from './imghead/imghead.component';
import { AppleComponent } from './apple/apple.component';
import { LemonComponent } from './lemon/lemon.component';
import { OrangeComponent } from './orange/orange.component';
import { BananainfoComponent } from './bananainfo/bananainfo.component';
import { BananaComponent } from './banana/banana.component';
import { MatDialogModule } from '@angular/material/dialog';

import { AppleinfoComponent } from './appleinfo/appleinfo.component';
import { LemoninfoComponent } from './lemoninfo/lemoninfo.component';
import { OrangeinfoComponent } from './orangeinfo/orangeinfo.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopnavComponent,
    FruitimagesComponent,
    ImgheadComponent,
    LemoninfoComponent,
    AppleComponent,
    LemonComponent,
    OrangeComponent,
    BananainfoComponent,
    BananaComponent,
    AppleinfoComponent,
    OrangeinfoComponent,
    FooterComponent,
    AboutComponent,

  ],
  entryComponents:
  [
    BananainfoComponent,
    AppleinfoComponent,
    LemoninfoComponent,
    OrangeinfoComponent,
    
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
   
 ],

 exports:[

  MatDialogModule,
 

 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
