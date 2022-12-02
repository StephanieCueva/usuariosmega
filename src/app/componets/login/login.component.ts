import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
form:FormGroup;
loading = false;

constructor (private fb: FormBuilder, private _snackBar: MatSnackBar, private router:Router){
this.form= this.fb.group({
  usuario:['',Validators.required],
  password:['',Validators.required],
})
}
  ngOnInit(): void {
  }

  ingresar(){
    //Para acceder a la informacion del array
    const usuario= this.form.value.usuario;
    const password= this.form.value.password;
    
    if(usuario=='scueva' && password == 'admin123'){
      //redireccionamos al dashword
      this.fakeloading();
    } else {
      //mostramos mensaje de error
      this.error();
      this.form.reset();
    }
  }

  error(){
    this._snackBar.open('Usuario o Contraseña ingresados son ivalidos','',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom',
    })
  } 

  fakeloading(){
    this.loading=true;
    setTimeout(()=>{

      //Redireccionamos al dashword
      this.router.navigate(['dashboard']);
    },1500)
  }
}
