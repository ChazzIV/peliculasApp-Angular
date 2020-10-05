import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {PeliculaModel} from '../models/pelicula.models';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey = '*Your APIKEY*';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  peliculas: any [] = [];


  constructor( private http: HttpClient ) { }

  getCartelera(): any {
    const desde = new Date();
    const hasta = new Date();
    hasta.setDate( hasta.getTime() + 7 );

    const desdeStr = `${ desde.getFullYear()}-0${ desde.getMonth() + 1}-${ desde.getDate()}`;
    const hastaStr = `${ desde.getFullYear()}-0${ desde.getMonth() + 1}-${ desde.getDate()}`;

    const url = ` ${ this.urlMoviedb }/movie/now_playing?api_key=${this.apikey}&language=es-ES&page=1`;
    return this.http.get( url ).pipe(
      map( (res: any) => res.results )
    );
  }

  getPopulares(): any{

    const url = `${ this.urlMoviedb }/discover/movie?api_key=${this.apikey}&sort_by=popularity.desc`;

    return this.http.get( url ).pipe(
      map( (res: any) => res.results )
    );

  }

  getPopularesNinos(): any{
    // const url = ` ${ this.urlMoviedb }/discover/movie?api_key=${ this.apikey }&certification_country=US&certification.lte=G&sort_by=popularity.desc`;
    const url = ` ${ this.urlMoviedb }/movie/upcoming?api_key=${ this.apikey }&language=es-ES`;

    return this.http.get( url ).pipe(
      map( (res: any) => res.results )
    );

  }

  buscarPelicula( texto: string ): any{

    const url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es-ES&query=${texto}`;

    // @ts-ignore
    return this.http.get( url ).pipe( map( (resp: any) => {
      // return this.crearArregloPeliculas(resp);
      // const peliculas : PeliculaModel [] = [];
      this.peliculas = resp.results;
      return resp.results ;

    }));
  }

  getPelicula(id: string): any{
    const url = ` ${ this.urlMoviedb }/movie/${id}?api_key=${ this.apikey }&language=es-ES`;

    return this.http.get( url ).pipe(
      map( (res: any) => res )
    );

  }

  private crearArregloPeliculas( peliculaObj: Object): any{

    const peliculas: PeliculaModel [] = [];
    // Se valida si el objeto tiene datos, ésto se hace cuando el ID es el nodo principal del objeto
    if ( peliculaObj === null) {return[]; }
    Object.keys(peliculaObj).forEach((key: any ) => {

      const pelicula: PeliculaModel = peliculaObj[ key];
      pelicula.id = key;
      peliculas.push(pelicula);
    });
    return peliculas;

  }

}
