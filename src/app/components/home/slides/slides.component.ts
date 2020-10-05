import {Component, Input, OnInit} from '@angular/core';
import {PeliculasService} from '../../../services/peliculas.service';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class SlidesComponent implements OnInit {


  constructor(public  peliculasService: PeliculasService) { }

  @Input('peliculas') peliculas;
  @Input('titulo') titulo;


  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      },
      1000: {
        items: 5
      }
    },
    nav: true
  };

  ngOnInit(): void {
  }


}
