import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{
  arrayTop: any [] = [];
  yearNow: Date = new Date();
  constructor(private spotifyService:SpotifyService) { }
  ngOnInit(): void {
      this.spotifyService.PetitionAlbum().subscribe(data=>{
        this.arrayTop = data.playlists.items;
        this.arrayTop = this.arrayTop.filter(x => x.description.includes("Tu actualización diaria"))        
      });
  }
}
