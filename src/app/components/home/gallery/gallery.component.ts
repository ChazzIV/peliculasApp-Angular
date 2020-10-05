import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styles: [
  ]
})
export class GalleryComponent implements OnInit {

  @Input('peliculas') peliculashome;
  @Input('titulo') titulohome;

  constructor() {


  }

  ngOnInit(): void {
  }

}
