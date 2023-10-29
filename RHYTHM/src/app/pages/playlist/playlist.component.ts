import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  arrayInfoGeneros: any;
  arrayInfoGenerosAUX: any[] = [];
  filter: boolean = false;

  constructor(private service: SpotifyService) { }

  ngOnInit(): void {
    this.rellenarArrayPlaylist();
  }

  rellenarArrayPlaylist() {
    this.arrayInfoGeneros = [
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

    this.arrayInfoGeneros.forEach((x: any) => {
      this.service.petitionGeneros(x[0].nombre).subscribe(data => {
        x[1].push(data.tracks.items);
      })
    })
  }

  filterArrays(tipoPlaylist: any) {
    this.filter = false;
    this.arrayInfoGeneros.forEach((x: any) => {
      if (x[0].nombre == tipoPlaylist) {
        this.filter = true;
        this.arrayInfoGenerosAUX = x[1][0];
      } 
    });

    
  }
}
