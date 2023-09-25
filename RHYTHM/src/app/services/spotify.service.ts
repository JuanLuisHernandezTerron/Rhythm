import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService implements OnInit{
  private _getInfoQuevedo$: BehaviorSubject<[]> = new BehaviorSubject([]);   
  private _getInfoOmega$: BehaviorSubject<[]> = new BehaviorSubject([]);   

  constructor(private http:HttpClient) { 
    this.PetitionInfoQuevedo();
    this.PetitionInfoOmega();
  }

  ngOnInit(): void {
  }

  setInfoQuevedo(info:any){
    this._getInfoQuevedo$.next(info)
  }

  setInfoOmega(info:any){
    this._getInfoOmega$.next(info)
  }

  get getInfoOmega$():Observable<any> {
    return this._getInfoOmega$.asObservable();
  }

  get getInfoQuevedo$():Observable<any> {
    return this._getInfoQuevedo$.asObservable();
  }

  PetitionInfoQuevedo(){
     let headers = new HttpHeaders({
       'x-rapidapi-host': 'spotify23.p.rapidapi.com',
       'x-rapidapi-key': '50af629ee4msh66491fbfe8f61bep1e86efjsn74473a2cfa62'
     })
     let params = new HttpParams().set('q','Quevedo')
     params.append('type','multi')
     return this.http.get<any>('https://spotify23.p.rapidapi.com/search/',{headers:headers,params:params}).subscribe(data=>{
     this.setInfoQuevedo(data);
     });
  }

  PetitionInfoOmega(){
    let headers = new HttpHeaders({
      'x-rapidapi-host': 'spotify23.p.rapidapi.com',
      'x-rapidapi-key': '50af629ee4msh66491fbfe8f61bep1e86efjsn74473a2cfa62'
    })
    let params = new HttpParams().set('q','Omega Fuerte')
    params.append('type','multi')
    return this.http.get<any>('https://spotify23.p.rapidapi.com/search/',{headers:headers,params:params}).subscribe(data=>{
    this.setInfoOmega(data);
    });
  }
}
