import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService implements OnInit {
  private _getInfoQuevedo$: BehaviorSubject<[]> = new BehaviorSubject([]);
  private _getInfoOmega$: BehaviorSubject<[]> = new BehaviorSubject([]);
  private _getCantantes$: BehaviorSubject<[]> = new BehaviorSubject([]);
  private accessToken = 'BQB-Lh9NwMuN_Tup-NpjGRoWyhoS1BmoIluM38jyu_2-jiisWuy5zxfRm82VINyoxmmM6UlUZTczs9rT3DTIIRgKpv_5DAIODwDSmiBq9D3yjaXCras';
  constructor(private http: HttpClient) {
    this.PetitionInfoQuevedo();
    this.PetitionInfoOmega();
  }

  ngOnInit(): void {
    localStorage.setItem('token',this.accessToken);
  }

  setInfoQuevedo(info: any) {
    this._getInfoQuevedo$.next(info);
  }

  setInfoCantantesSearch(info: any) {
    this._getCantantes$.next(info);
  }

  setInfoOmega(info: any) {
    this._getInfoOmega$.next(info);
  }

  get getInfoOmega$(): Observable<any> {
    return this._getInfoOmega$.asObservable();
  }

  get getInfoCantantesSearch$(): Observable<any> {
    return this._getCantantes$.asObservable();
  }

  get getInfoQuevedo$(): Observable<any> {
    return this._getInfoQuevedo$.asObservable();
  }

  PetitionInfoQuevedo() {
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.accessToken);
    const endpoint = "https://api.spotify.com/v1/search?q=this+is+quevedo&type=playlist&limit=1";
    return this.http.get<any>(endpoint, { headers: headers }).subscribe(data => {
      this.setInfoQuevedo(data);
    });
  }

  PetitionInfoOmega() {
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.accessToken);
    const endpoint = "https://api.spotify.com/v1/artists/1UjxAZqzphB1tsMb1aWBj0/top-tracks?market=ES";
    return this.http.get<any>(endpoint, { headers: headers }).subscribe(data => {
      this.setInfoOmega(data);
    });
  }

  PetitionAlbum(){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.accessToken);
    const endpoint = "https://api.spotify.com/v1/search?q=top 50&type=playlist&limit=10";
    return this.http.get<any>(endpoint, { headers: headers });
  }

  petitionBuscadorCantantes(cantante:any){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.accessToken);
    const endpoint = `https://api.spotify.com/v1/search?q=${cantante}&type=artist&limit=10`;
    return this.http.get<any>(endpoint, { headers: headers });
  }

  petitionGeneros(genero:any){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.accessToken);
    const endpoint = `https://api.spotify.com/v1/search?q=${genero}&type=track&limit=1`;
    return this.http.get<any>(endpoint, { headers: headers });
  }
}
