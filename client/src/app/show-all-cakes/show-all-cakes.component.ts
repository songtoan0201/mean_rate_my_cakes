import { Component, OnInit, Input } from '@angular/core';

// import the main app compent
import { AppComponent } from './../app.component';
import { HttpService } from '../http.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-show-all-cakes',
  templateUrl: './show-all-cakes.component.html',
  styleUrls: ['./show-all-cakes.component.css']
})
export class ShowAllCakesComponent implements OnInit {
  @Input() OneCake: any = {};
  @Input() newRating: any = {};
  @Input() editing: any = 0;
  errors = [];
  // averageRating: any;

  // in the constructor we need a parameter that talks back to the main 
  // app component and import it at the top
  constructor(public _app: AppComponent, public _httpService: HttpService) { }

  ngOnInit() {
  }

  OpenEditComponent(id: string) {
    if(!this.editing){
      this.editing = true;
    } else if(this.editing && this.OneCake == this._app.showCake(id)){
      this.editing = true;
    } else if(this.editing && this.OneCake != this._app.showCake(id)){
      this.editing = false;
    }
    this._app.showCake(id);
    // if (this.editing == id) {
    //   //this is how we access something from the app component within a child component
    //   console.log("inside the if");
    //   this._app.editing = 0;
    //   // this._app.showCake(id);
    // } else if(this.editing === 0){
    //   this.editing = id;
    //   console.log("inside the first else if");
    // } else if(this.editing !== 0){
    //   console.log("inside the last else if");
    //   this.editing = id;
    // }
    // console.log(this.editing);
    // console.log("above the the editing variable");

  }

  

  deleteCake(id: string) {
    const obs = this._app._httpService.deleteCake(id);
    obs.subscribe((data: any) => {
      this._app.getAllCakes();
    })
  }

  onSubmitCreateRating(id: string) {
    const obs = this._app._httpService.createRating(id, this.newRating);
    obs.subscribe((data: any) => {
      if(data["errors"]){
        //this is an error check for custom error messages (see models for custom error message setup)
        for(let key in data.errors){
          this.errors.push(data.errors[key].message);
        }
      } 
      else{
        this.newRating = data;
        console.log("New Rating is", this.newRating);
        this.OpenEditComponent(id);
      }
    })
  }
}



