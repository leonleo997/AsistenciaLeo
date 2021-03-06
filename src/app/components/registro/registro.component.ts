import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario';
import {UsuarioService} from '../../services/usuario.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario:Usuario;
  usuarios: Usuario[];

  constructor(public usuarioService: UsuarioService, private router: Router) {
    this.usuario={
      id: 0,
    codigo: "",
    nombre: "",
    carrera: "Programa Académico",
    semestre: "Semestre",
    correo: "",
    contrasena: "",
    tipo_usuario_id: 1
    }
  }

  refrescar(){
    this.usuario={
      id: 0,
    codigo: "",
    nombre: "",
    carrera: "Programa Académico",
    semestre: "Semestre",
    correo: "",
    contrasena: "",
    tipo_usuario_id: 1
    }
  }
  ngOnInit() {
    console.log('CARGANDO USUARIOS');
    this.usuarioService.getUsuarios().subscribe((usuariosNuevos) =>{
      this.usuarios= usuariosNuevos;
    });
  }

  logout (){
    localStorage.removeItem('correo');
    this.router.navigate(['inicio'])
  }

  addUser(){
    //console.dir(this.usuarios);
    //console.log('Entra al add user');
    let usuarioNuevo = this.usuario;
    usuarioNuevo.id = 1;
    console.log(usuarioNuevo);
    let response2 = this.usuarioService.addUsuario(usuarioNuevo).subscribe((response) =>{
      console.log(response.data);
    });
    console.log(response2);
    this.refrescar();
  }

  seguimiento(){
    this.router.navigate(['seguimientotutoria'])
  }

  observaciones(){
    this.router.navigate(['observacionestutoria'])
  }

  adicionarMateria() {
    this.router.navigate(['materia'])
  }

  registrarEstudiante() {
    this.router.navigate(['estudiante'])
  }

  registrarTutor(){
    this.router.navigate(['registro'])
  }

  reportes(){
    this.router.navigate(['reporte'])
  }

}
