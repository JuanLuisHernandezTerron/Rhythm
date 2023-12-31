import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService implements OnInit {
  private _getInfoQuevedo$: BehaviorSubject<[]> = new BehaviorSubject([]);
  private _getInfoOmega$: BehaviorSubject<[]> = new BehaviorSubject([]);
  private _getCantantes$: BehaviorSubject<[]> = new BehaviorSubject([]);
  private _getCantantesID$: BehaviorSubject<[]> = new BehaviorSubject([]);
  private _getinfoCantantesPage$: BehaviorSubject<[]> = new BehaviorSubject([]);
  arrayCantantes:any []= ['Bad Bunny','Anuel AA','Rauw Alejandro','J Balvin','Mora','Feid','El Barrio','Demarco Flamenco','Andy & Lucas','José Mercé','El Arrebato','Los Rebujitos','Jay-Z','Eminem','Kanye West','Tupac','Snoop Dogg',
'Ariana Grande','Lady Gaga','Rosalía','David Bisbal','Rels B','Pablo Alborán','Héctor Lavoe','Willie Colón','Rubén Blades','Marc Anthony','Ismael Rivera','XXXTentacion']
  arrayAUX:any [] = [];
  arrayInfoCantantes:any[] = [];

  
  private accessToken = 'BQDCRE_IuI_kn-C-Bz5i5Q1GWYBy8wWhWoDz7Cpr6Kp4bgHDbHi02tEq8X7U8zFu_RZCteFM_Jb13-QuSZACBqnz2537qwccSMtRMkSsIMKJ8ikiG_4';
  constructor(private http: HttpClient) {
    this.PetitionInfoQuevedo();
    this.PetitionInfoOmega();
    this.petitionCantantesGeneros();
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
  
  setinfoCantantesPage(info: any) {
    this._getinfoCantantesPage$.next(info);
  }

  setInfoOmega(info: any) {
    this._getInfoOmega$.next(info);
  }

  setCantantesID(info:any){
    this._getCantantesID$.next(info);
  }

  get getInfoOmega$(): Observable<any> {
    return this._getInfoOmega$.asObservable();
  }

  get getCantantesID$(): Observable<any> {
    return this._getCantantesID$.asObservable();
  }

  get getinfoCantantesPage$(): Observable<any> {
    return this._getinfoCantantesPage$.asObservable();
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
    const endpoint = `https://api.spotify.com/v1/search?q=${genero}&type=track&limit=18`;
    return this.http.get<any>(endpoint, { headers: headers });
  }

  petitionGetCantantedID(idCantante:any){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.accessToken);
    const endpoint = `https://api.spotify.com/v1/artists/${idCantante}/top-tracks?market=ES`;
    return this.http.get<any>(endpoint, { headers: headers }).subscribe(data=>{
      this.setCantantesID(data);
    });;
  }

  petitionCantantesGeneros(){
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.accessToken);
    this.arrayCantantes.forEach(e=>{
      const endpoint = `https://api.spotify.com/v1/search?q=${e}&type=artist&limit=1`;
      return this.http.get<any>(endpoint, { headers: headers }).subscribe(data=>{
        this.arrayAUX.push(data)        
        this.setinfoCantantesPage(this.arrayAUX);
      });
    })
  }
}
