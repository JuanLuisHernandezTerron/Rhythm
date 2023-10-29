import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SpotifyService } from 'src/app/services/spotify.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
declare var $:any;



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  
})
export class MainComponent implements OnInit {

  constructor(private spotifyService: SpotifyService) {
  }
  infoQuevedo: any;
  infoQuevedoMain: any;
  imgThisQuevedo = 'https://seed-mix-image.spotifycdn.com/v6/img/artist/52iwsT98xCoGgiGntTiR7K/en/default';
  infoOmega: any;
  arrainfoOmega: any[] = [];
  arraiInfoGeneros: any[] = [];
  urlAnterio: any;
  audio = new Audio();


  ngOnInit(): void {
    this.spotifyService.getInfoQuevedo$.subscribe(data => {
      this.infoQuevedo = data;
      this.infoQuevedoAlbum()
    })

    this.spotifyService.getInfoOmega$.subscribe(data => {
      this.infoOmega = data;
      this.infoOmegaMain();
    })
    this.infoGeneros();
    
    $(document).ready(function () {

      var height = $(window).height();

      $('#altura').height(height);
    });

  }

  infoOmegaMain() {
    this.infoOmega = this.infoOmega.tracks?.filter((x: any) => x.artists.filter((y: any) => y.name == 'Omega'))
  }

  playMusic(urlMusica: any) {
    this.audio.pause();
    this.audio.src = urlMusica;
    this.audio.volume = 0.5;
    this.audio.play();
  }

  infoGeneros() {
    this.arraiInfoGeneros = [
      [{
        'nombre': 'pop'
      },
      []
      ],
      [{
        'nombre': 'flamenco'
      },
      []
      ],
      [{
        'nombre': 'reggaeton'
      },
      []
      ],
      [{
        'nombre': 'rap'
      },
      []
      ],
      [{
        'nombre': 'salsa'
      },
      []
      ],
      [{
        'nombre': 'sad'
      },
      []
      ]
    ]
    this.arraiInfoGeneros.forEach(x => {
      this.spotifyService.petitionGeneros(x[0].nombre).subscribe(data => {
        x[1].push(data.tracks.items[0]);
      })
    })    
  }

  infoQuevedoAlbum() {
    this.infoQuevedoMain = this.infoQuevedo.playlists?.items.filter((x: {
      uri: string; owner: {
        id: string; name: string;
      };
    }) => x.uri == 'spotify:playlist:37i9dQZF1DZ06evO2Xr2ut' && x.owner.id == 'spotify')
  }
}
