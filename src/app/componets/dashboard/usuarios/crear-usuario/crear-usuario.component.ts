import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuarios';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit{
  rol:any[]=['Administrador','Vendedor','Operador logistico','Teleoperador']
  sexo:any[]=['Masculino', 'Femenino'] 
  form!:FormGroup;

  constructor(private fb: FormBuilder,
              private _usuarioService: UsuarioService,
              private router:Router,
              private _snackBar: MatSnackBar){
    
  }

  ngOnInit(): void {
    this.form = this.initForm()
    }
  
    initForm():FormGroup{
      return this.fb.group({
        usuario: ['',Validators.required],
        nombre: ['',Validators.required],
        apellido: ['',Validators.required],
        rol: ['',Validators.required],
        correo: ['',Validators.required],
        telefono: ['',Validators.required],
        sexo: ['',Validators.required],
        fecha: ['',Validators.required],
      })}
  
  agregarUsuario(){
  
     const user : Usuario = {
      usuario:this.form.value.usuario,
      nombre:this.form.value.nombre,
      apellido:this.form.value.apellido,
      rol:this.form.value.rol,
      correo:this.form.value.correo,
      telefono:this.form.value.telefono,
      sexo:this.form.value.sexo,
      fecha:this.form.value.fecha,
     }

     this._usuarioService.agregarUsuario(user);
     this.router.navigate(['/dashboard/usuarios'])

     this._snackBar.open('El usuario fue agregado con exito!','',{
      duration:1500,
      horizontalPosition:'center',
      verticalPosition:'bottom',
    });
  }

  }
