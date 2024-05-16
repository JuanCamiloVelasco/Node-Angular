import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';

const VALIDATORS_MESSAGES:any = {
  required: 'No puede ser vacio',
  email: 'El email no es valido',
  minlength: 'Campo muy corto',
  notMatch: 'Las contraseñas no coinciden!'
}

@Component({
  selector: 'input-validation',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './input-validation.component.html',
  styleUrl: './input-validation.component.css'
})
export class InputValidationComponent implements OnInit, OnChanges{
  @Input()
  control!:AbstractControl;
  @Input()
  showErrosWhen:boolean = true;
  errorMessages:string[] = []

  ngOnChanges(changes: SimpleChanges): void {
    this.checkValidation();
  }

  ngOnInit(): void {
    this.control.statusChanges.subscribe(() => {
      this.checkValidation();
    });
    this.control.valueChanges.subscribe(() => {
      this.checkValidation();
    })
  }

  checkValidation(){
    const errors = this.control.errors;
    if(!errors){
      this.errorMessages = [];
      return;
    }



    const errorKeys = Object.keys(errors);
    this.errorMessages = errorKeys.map(key => VALIDATORS_MESSAGES[key]);
  }
}
