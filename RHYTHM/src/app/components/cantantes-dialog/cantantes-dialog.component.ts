import { Component,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-cantantes-dialog',
  templateUrl: './cantantes-dialog.component.html',
  styleUrls: ['./cantantes-dialog.component.scss']
})
export class CantantesDialogComponent {
  ObjectInfoCantante: any;
  informacionCantante:any;
  constructor(public dialogRef: MatDialogRef<CantantesDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any, private service:SpotifyService){ }
  ngOnInit() {
    this.informacionCantante = this.data[1];
    console.log(this.data[1]);
    this.service.getCantantesID$.subscribe(data=> {
      this.ObjectInfoCantante = data.tracks})
  }
}

