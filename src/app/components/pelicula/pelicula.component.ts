import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  pelicula: any;
  regresarA = '';
  busqueda = '';

  constructor( public peliculasServices: PeliculasService,
               public activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe( params => {
      console.log(params);
      this.regresarA = params.pag;

      if (params.busqueda) {
        this.busqueda = params.busqueda;
      }

      this.peliculasServices.getPelicula(params.id)
        .subscribe( pelicula => this.pelicula = pelicula);
    });
  }

  ngOnInit(): void {
  }

}
