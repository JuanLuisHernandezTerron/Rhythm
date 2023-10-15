import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-cantantes-dialog',
  templateUrl: './cantantes-dialog.component.html',
  styleUrls: ['./cantantes-dialog.component.scss']
})
export class CantantesDialogComponent {
  ObjectInfoCantante: any;
  informacionCantante: any;
  mode: ProgressSpinnerMode = 'determinate';
  value:any = 0;
  audio = new Audio();
  idAnterior:any;

  constructor(public dialogRef: MatDialogRef<CantantesDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private service: SpotifyService) { }
  ngOnInit() {

    this.informacionCantante = this.data[1];

    this.service.getCantantesID$.subscribe(data => {
      this.ObjectInfoCantante = data.tracks
      console.log(this.ObjectInfoCantante);
    })



  }

  playPreviwe(duracionSegundos: any, id: string, urlMusica: string) {
    if (this.idAnterior) {
      this.idAnterior!.classList.remove('spinner');
      this.idAnterior!.classList.add('d-none');
    }

    let info = document.getElementById(id);
    this.idAnterior = info;
    let audioAUX = 0;
    info!.classList.remove('d-none');
    info!.classList.add('spinner');

    this.audio.pause();
    this.audio.src = urlMusica;
    this.audio.volume = 0.5;
    this.audio.play();
    this.audio.onloadedmetadata = () => {
      audioAUX=this.audio.duration*1000;
      console.log(audioAUX);
      
      setTimeout(()=>{
        info!.classList.remove('spinner');
        info!.classList.add('d-none');
      },audioAUX)  
    }
    this.audio.ontimeupdate = () => {
      this.value = this.audio.currentTime*3.4;      
    };
  }
}

