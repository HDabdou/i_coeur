import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OrangeComponent } from './orange/orange.component';
import { FreeComponent } from './free/free.component';
import { ExpressoComponent } from './expresso/expresso.component';
import { FormsModule } from '@angular/forms';
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification/ngx';
import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PinCheck } from '@ionic-native/pin-check/ngx';

@NgModule({
  declarations: [AppComponent,OrangeComponent,FreeComponent,ExpressoComponent,LoginComponent,InscriptionComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    PhonegapLocalNotification,
    Push,
    PinCheck
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
