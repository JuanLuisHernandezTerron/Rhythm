import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-cantantes',
  templateUrl: './cantantes.component.html',
  styleUrls: ['./cantantes.component.scss']
})
export class CantantesComponent implements OnInit {

  cantantesCtrl = new FormControl('');
  filteredCantantes!: Observable<any[]>;
  cantantes: any[] = [];
  arrayInfoAllCantantes: any[] = [];

  arrayInfoReggeton: any[] = [];
  arrayInfoFlamenco: any[] = [];
  arrayInfoRap: any[] = [];
  arrayInfoPop: any[] = [];
  arrayInfoSalsa: any[] = [];
  arrayInfoSad: any[] = [];

  constructor(private service: SpotifyService) {
    this.filteredCantantes = this.cantantesCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterCantantes(state) : this.cantantes.slice())),
    );
  };

  ngOnInit(): void {
    this.service.getinfoCantantesPage$.subscribe(data => {
      setTimeout(() => {
        this.arrayInfoAllCantantes = data;
        this.rellenarArraysFilter();
      }, 500)
    })

  }

  searchQ(cadena: any) {
    if (cadena.length > 0) {
      this.service.petitionBuscadorCantantes(cadena).subscribe(data => {
        this.service.setInfoCantantesSearch(data);
      });
      this.service.getInfoCantantesSearch$.subscribe(data => {
        this.cantantes = data.artists?.items;
      })
    }
  }


  rellenarArraysFilter() {
    this.arrayInfoFlamenco = this.arrayInfoAllCantantes.filter(x => x.artists.items[0].genres.some((e: any) => e.includes("flamenco")));
    this.arrayInfoPop = this.arrayInfoAllCantantes.filter(x => x.artists.items[0].genres.some((e: any) => e.includes("pop")));
    this.arrayInfoSad = this.arrayInfoAllCantantes.filter(x => x.artists.items[0].genres.some((e: any) => e.includes("emo rap")));
    this.arrayInfoReggeton = this.arrayInfoAllCantantes.filter(x => x.artists.items[0].genres.some((e: any) => e.includes("reggaeton")));
    this.arrayInfoSalsa = this.arrayInfoAllCantantes.filter(x => x.artists.items[0].genres.some((e: any) => e.includes("salsa")));
    this.arrayInfoRap = this.arrayInfoAllCantantes.filter(x => x.artists.items[0].genres.some((e: any) => e.includes("rap")));
  }
  _filterCantantes(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.cantantes?.filter(cantante => cantante.name.toLowerCase().includes(filterValue));
  }

}
