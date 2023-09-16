import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService implements OnInit{

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
  }

  prueba(){
    // let headers = new HttpHeaders({
    //   'x-rapidapi-host': 'spotify23.p.rapidapi.com',
    //   'x-rapidapi-key': '50af629ee4msh66491fbfe8f61bep1e86efjsn74473a2cfa62'
    // })
    // let params = new HttpParams().set('q','El ba')
    // params.append('type','multi')
    // return this.http.get<any>('https://spotify23.p.rapidapi.com/search/',{headers:headers,params:params});
  }
}
