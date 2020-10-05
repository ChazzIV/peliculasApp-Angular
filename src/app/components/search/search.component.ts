import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  buscar = '';

  constructor( public peliculasService: PeliculasService,
               public activatedRouter: ActivatedRoute) {

    this.activatedRouter.params.subscribe( params => {
      console.log(params);
      if (params.texto) {
        this.buscar = params.texto;
        this.buscarPeliculas();

      }
    });
  }

  ngOnInit(): void {
  }

  buscarPeliculas() {
    if (this.buscar.length === 0){
      return;
    }
    this.peliculasService.buscarPelicula(this.buscar).subscribe();
    // this.router.navigate(['/search', texto]);
  }

  buscarPelicula(texto: string) {
    texto = texto.trim();
    if (texto.length === 0){
      return;
    }
    console.log(texto);
    this.peliculasService.buscarPelicula(texto).subscribe();
    // this.router.navigate(['/search', texto]);
  }

}
