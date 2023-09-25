import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private spotifyService: SpotifyService) {
  }
  infoQuevedo: any;
  infoQuevedoMain: any;
  imgThisQuevedo = 'https://seed-mix-image.spotifycdn.com/v6/img/artist/52iwsT98xCoGgiGntTiR7K/en/default';
  infoOmega: any;
  arrainfoOmega: any[] = [];

  ngOnInit(): void {
    this.spotifyService.getInfoQuevedo$.subscribe(data => {
      this.infoQuevedo = data;
      this.infoQuevedoAlbum()
    })

    this.spotifyService.getInfoOmega$.subscribe(data => {
      this.infoOmega = data;
      console.log(data);
      this.infoOmegaMain();
    })
  }

  infoOmegaMain(){
    this.infoOmega = this.infoOmega.tracks?.items.filter((x: any)=>x.data.artists.items.filter((x:any)=>x.profile.name=='Omega'))    
    console.log(this.infoOmega);    
  }

  infoQuevedoAlbum() {
    this.infoQuevedoMain = this.infoQuevedo.playlists?.items.filter((x: { data: { uri: string; owner: { name: string; }; }; }) => x.data.uri == 'spotify:playlist:37i9dQZF1DZ06evO2Xr2ut' && x.data.owner.name == 'Spotify')
    console.log(this.infoQuevedoMain);
  }
}
