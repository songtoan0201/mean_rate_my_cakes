import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import the http service
import { HttpService } from './http.service';

// don't forget these
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateCakeComponent } from './create-cake/create-cake.component';
import { ShowAllCakesComponent } from './show-all-cakes/show-all-cakes.component';
import { EditCakeComponent } from './edit-cake/edit-cake.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCakeComponent,
    ShowAllCakesComponent,
    EditCakeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
