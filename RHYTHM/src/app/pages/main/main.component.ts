import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private spotifyService:SpotifyService) { }

  ngOnInit(): void {
    // this.spotifyService.prueba().subscribe(data=>{console.log(data)})
  }
}
