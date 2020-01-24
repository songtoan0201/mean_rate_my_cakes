import { Component, OnInit, Input } from '@angular/core';

// improt this
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';
import { AppComponent } from './../app.component';
@Component({
  selector: 'app-create-cake',
  templateUrl: './create-cake.component.html',
  styleUrls: ['./create-cake.component.css']
})
export class CreateCakeComponent implements OnInit {
  errors = [];
  newCake = {baker:"",imgLink:""};
  // @Input()
  constructor(public _httpService: HttpService, public _appCom: AppComponent) { }

  ngOnInit() {
  }
  onSubmitCreateCake(){
    this.errors = [];
    const obs = this._httpService.createCake(this.newCake);
    obs.subscribe((data:any)=>{
      if(data["errors"]){
        //this is an error check for custom error messages (see models for custom error message setup)
        for(let key in data.errors){
          this.errors.push(data.errors[key].message);
        }
      } else {
        // this line clears the errors array when they are successful
        // and the cake was added to the database
        this.errors = [];
        this.newCake = {baker:"", imgLink:""};
        // update the list of cakes
      }
      this._appCom.getAllCakes();
    })
  }

}
