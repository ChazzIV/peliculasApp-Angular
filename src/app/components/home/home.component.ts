import {Component, Input, OnInit} from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';
import { Router } from '@angular/router';
import {darkblue} from 'color-name';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  cartelera: any[] = [];
  populares: any;
  popularesNinos: any;

  constructor(private route: Router,
              public peliculasService: PeliculasService) {
    this.peliculasService.getCartelera()
        .subscribe( data => this.cartelera = data );

    this.peliculasService.getPopulares()
        .subscribe( data => this.populares = data );

    this.peliculasService.getPopularesNinos()
        .subscribe( data => this.popularesNinos = data );

  }

  ngOnInit(): void {

  }


}
