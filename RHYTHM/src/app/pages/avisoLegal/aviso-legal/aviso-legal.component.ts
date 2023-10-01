import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aviso-legal',
  templateUrl: './aviso-legal.component.html',
  styleUrls: ['./aviso-legal.component.scss']
})
export class AvisoLegalComponent implements OnInit{

  ngOnInit() {
    window.scrollTo(0,0);
  }
}
