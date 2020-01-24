import { Component, OnInit } from '@angular/core';

// import this stuffssss
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // declare all the variables
  allCakes: any = [];
  //newRating:any = {value:null,content:""};
  newCake: any = { baker: "", imgLink: "" };
  errors: any = [];
  editing: boolean = false;
  theCake: any = {};
  averageRating: any = 0;
  constructor(public _httpService: HttpService) {
  }

  ngOnInit() {
    this.getAllCakes();
  }

  getAllCakes(): void {
    const obs = this._httpService.findAllCakes(); // this goes to the service file
    obs.subscribe((data: any) => {
      this.allCakes = data;
      console.log(this.allCakes);
    })
  }

  showCake(id: string) {
    const obs = this._httpService.findOneCake(id);
    obs.subscribe((data: any) => {
      this.averageRating = 0;
      for (let ratings of data._ratings) {
        this.averageRating += ratings.value;
      }
      if (data._ratings.length != 0 && data._ratings.length != null) {
        this.averageRating = this.averageRating / data._ratings.length;
        console.log("This is the average:" + this.averageRating);
      }
      else {
        this.averageRating = "No Ratings"
        console.log("No ratings:" + this.averageRating);
      }
      this.theCake = data;
    })
  }

}
