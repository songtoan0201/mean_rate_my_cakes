import { Component, OnInit, Input } from '@angular/core';

import { AppComponent } from './../app.component';
import { ShowAllCakesComponent } from './../show-all-cakes/show-all-cakes.component';

@Component({
  selector: 'app-edit-cake',
  templateUrl: './edit-cake.component.html',
  styleUrls: ['./edit-cake.component.css']
})
export class EditCakeComponent implements OnInit {

  @Input() theCake: any = {};
  @Input() average: any;

  constructor( public _app: AppComponent) { }

  ngOnInit() {
   //this.average = this._app.averageRating;
  }

  



}
