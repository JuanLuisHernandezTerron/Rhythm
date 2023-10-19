import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  arraiInfoGeneros: any;

  constructor(private service:SpotifyService) { }

  ngOnInit(): void {
    this.rellenarArrayPlaylist();
  }

  rellenarArrayPlaylist(){
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

    this.arraiInfoGeneros.forEach((x:any) => {
      this.service.petitionGeneros(x[0].nombre).subscribe(data => {
        x[1].push(data.tracks.items);
      })
    })

    console.log(this.arraiInfoGeneros);
    
  }

  filterArrays(tipoPlaylist:any){
    console.log(this.arraiInfoGeneros.forEach((x:any) => {
      console.log(x[0].nombre);
    }));
  }
}
