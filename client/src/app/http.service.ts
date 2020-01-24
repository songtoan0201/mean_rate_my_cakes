import { Injectable } from '@angular/core';

// imprto these fo rinjection
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public _http: HttpClient) { }

  // more functions
  findAllCakes(): any{
    return this._http.get('/cakes');
  }

  // createRating(cakeId:string, data:any): any{
  //   return this._http.post('/cakes/'+cakeId+'/ratings',data);
  // }

  createCake(data: any): any{
    return this._http.post('/cakes',data);
  }

  findOneCake(id: string): any {
    console.log(id)
    console.log("inside the http.service");
    return this._http.get('/cakes/'+id);
  }

  deleteCake(id: string): any {
    return this._http.delete('/cakes/'+id);
  }

  createRating(id: string, data: any) {
    return this._http.post('/cakes/'+id+'/ratings', data);
  }
}
