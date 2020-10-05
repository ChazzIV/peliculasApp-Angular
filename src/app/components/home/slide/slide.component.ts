import {Component, Input, OnInit} from '@angular/core';
import {PeliculasService} from '../../../services/peliculas.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  @Input('peliculas') peliculas;

  cartelera: any;

  constructor( public peliculasService: PeliculasService) {
    this.peliculasService.getCartelera().subscribe( params => {
      this.cartelera = params['5'];
      console.log(this.cartelera);

    });
  }

  ngOnInit(): void {
  }

}
