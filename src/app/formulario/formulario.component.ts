import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Persona } from './Persona';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  persona: Persona = {
        nombre: "",
        apellidos: "",
        edad: "",
        DNI: "",
        cumple: "",
        colorFavorito: "",
        sexo: ""
  }

  listadoPersona: Array<Persona> = []
  i: any = 0;
  crear: boolean = true; /*Este booleano nos permite controlar si está añadiéndose (true) o actualizándose (false) la persona*/


  constructor() {
  }

  ngOnInit(): void {}

  agregar(form: NgForm){

    if(this.crear === true ){
      this.listadoPersona.push(this.persona)

        this.persona = {
          nombre: "",
          apellidos: "",
          edad: "",
          DNI: "",
          cumple:"",
          colorFavorito: "",
          sexo: "",
    }

    }else {
        this.listadoPersona[this.i] = this.i;
        this.crear = true;
    }

    form.resetForm();
  }

  modificar(i: number): void {
    this.persona = this.listadoPersona[i];
    this.i = i;
    this.crear = false;
  }

  borrar(i: number): void {
    this.listadoPersona.splice(i, 1)
  }
}


