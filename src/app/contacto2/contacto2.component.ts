import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto2',
  templateUrl: './contacto2.component.html',
  styleUrls: ['./contacto2.component.css']
})
export class Contacto2Component implements OnInit,  OnDestroy{

  formularioContacto: FormGroup;
  usuarioActivo: any = {
    nombre: 'Pedro',
    dni: '123123',
  }
  tipoDni: string = 'DNI';

  constructor(private form: FormBuilder){
    this.formularioContacto = this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      Tipodocumento: ['', [Validators.required, Validators.minLength(3)]],
      documento: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
    this.formularioContacto.get('Tipodocumento')?.valueChanges.subscribe(valor => {
      this.tipoDni = valor;
    });

    //de la siguiente forma podemos setear el valor de un campo y que no se pueda modificar por el usuario
    this.formularioContacto.patchValue({
      nombre: this.usuarioActivo.nombre,
      documento: this.usuarioActivo.dni,
    })
    this.formularioContacto.get('nombre')?.disable();
    this.formularioContacto.get('documento')?.disable();
  }

  //una destruccion de un componente se da cuando se cambia de vista
  ngOnDestroy(): void {
    console.log('Se destruyo este componente');
  }

  enviar(){
    console.log(this.formularioContacto);
  }

  hasErrors(controlName: string, errorType: string){
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched;
  }
}
