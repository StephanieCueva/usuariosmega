import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit{
  submitted:boolean=false;
  mensaje:string="Todos los datos son validos";
  contactForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.contactForm = this.fb.group({
      usuario: ['',Validators.required],
      correo: ['', Validators.required],
      mensaje:['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.contactForm=this.initForm()
  }

  initForm():FormGroup{
    return this.fb.group({
      usuario:["",[Validators.required, Validators.minLength(4)]],
      correo:["",[Validators.required,Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")]],
      mensaje:["",[Validators.required,Validators.maxLength(500)]]
    })
  }
  enviar(){
    this.submitted=true;
    if(this.contactForm.invalid){
      return;
    }
    alert(
      "EXITO!!\n\n" + JSON.stringify(this.contactForm.value, null, 4) +this.mensaje)

  }
}