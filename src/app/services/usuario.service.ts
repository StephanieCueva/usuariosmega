import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listUsuarios: Usuario[] = [
    {usuario: "scueva", nombre: 'Stephanie', apellido:'Cueva', sexo:'femenino', telefono:962859131,correo:'scueva@storemega.com', rol:"Administrador",fecha:"01/13/2020" },
    {usuario: "jsuasnavar", nombre: 'José', apellido:'Suasnavar', sexo:'masculino', telefono:952859141,correo:'scueva@storemega.com', rol:"Vendedor",fecha:"01/13/2021" },
    {usuario: "jsuasnavar", nombre: 'José', apellido:'Suasnavar', sexo:'masculino', telefono:952859141,correo:'scueva@storemega.com', rol:"Vendedor",fecha:"01/13/2021" },
    {usuario: "jsuasnavar", nombre: 'José', apellido:'Suasnavar', sexo:'masculino', telefono:952859141,correo:'scueva@storemega.com', rol:"Vendedor",fecha:"01/13/2021" },
  
  ];
  constructor() { }

  getUsuario(){
    return this.listUsuarios.slice();
  }
  eliminarUsuario(index:number){
    this.listUsuarios.slice(index,1);
  }

  agregarUsuario(usuario:Usuario){
    this.listUsuarios.unshift(usuario);
  }
}
