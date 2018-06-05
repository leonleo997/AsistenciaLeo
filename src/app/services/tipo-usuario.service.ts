import { Injectable } from '@angular/core';
import { Http, Response, Headers }       from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {TipoUsuario} from '../models/tipo-usuario';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class TipoUsuarioService {

  constructor(public http: Http) {}

  getAsistencias(): Observable <TipoUsuario []> {
    return this.http
               .get('https://centroleo.herokuapp.com/api/asistencias')
               .map(response => response.json().data);
  }

  addAsistencia (tiposUsuarios: TipoUsuario){
    console.log('entra add user');
    return this.http.post(
      'https://centroleo.herokuapp.com/api/usuarios', tiposUsuarios,
      {headers: new Headers({'Content-Type':  'application/json'})}
    ).map((response:Response)=>response.json().data);

  }

  
}