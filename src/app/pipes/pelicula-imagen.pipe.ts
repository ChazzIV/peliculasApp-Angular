import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImagen'
})
export class PeliculaImagenPipe implements PipeTransform {

  transform( pelicula: any, poster = false): any {
    const url = 'http://image.tmdb.org/t/p/w500';
    // const url = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';

    if (poster){
      return url + pelicula.poster_path;
    }

    if (pelicula.backdrop_path) {
      return url + pelicula.backdrop_path;
    }else{
      if ( pelicula.poster_path) {
        return url + pelicula.poster_path;
      }else{
        return 'assets/img/no-image.png';
      }
    }

  }

}
