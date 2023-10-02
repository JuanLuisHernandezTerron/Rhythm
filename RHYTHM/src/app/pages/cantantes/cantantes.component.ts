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

  constructor(private service: SpotifyService) {
    this.filteredCantantes = this.cantantesCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterCantantes(state) : this.cantantes.slice())),
    );
  };

  ngOnInit(): void {

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

  _filterCantantes(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.cantantes?.filter(cantante => cantante.name.toLowerCase().includes(filterValue));
  }

}
