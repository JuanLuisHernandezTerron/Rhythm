import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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


  ngOnInit(): void {
    this.spotifyService.getInfoQuevedo$.subscribe(data => {
      this.infoQuevedo = data;
      // this.infoQuevedoAlbum()
    })

    this.carousel()
  }

  carousel(){
    let items = document.querySelectorAll('.carousel .carousel-item')

    items.forEach((el) => {
        const minPerSlide = 4
        let next = el.nextElementSibling
        for (var i=1; i<minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
              next = items[0]
            }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.childNodes[0])
            next = next.nextElementSibling
        }
    })
  }

  infoQuevedoAlbum() {
    this.infoQuevedoMain = this.infoQuevedo.playlists?.items.filter((x: { data: { uri: string; owner: { name: string; }; }; }) => x.data.uri == 'spotify:playlist:37i9dQZF1DZ06evO2Xr2ut' && x.data.owner.name == 'Spotify')
    console.log(this.infoQuevedoMain);
  }
}
