import { Component, OnInit } from '@angular/core';
import { TitleComponent } from "../../partials/title/title.component";
import { FormBuilder, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PasswordMatchValidator } from '../../../shared/validators/password_match_validator';
import { IUserRegister } from '../../../shared/interfaces/IUserRegister';
import { TextInputComponent } from "../../partials/text-input/text-input.component";
import { DefaultButtonComponent } from "../../partials/default-button/default-button.component";

@Component({
    selector: 'app-register-page',
    standalone: true,
    templateUrl: './register-page.component.html',
    styleUrl: './register-page.component.css',
    imports: [TitleComponent, ReactiveFormsModule, TextInputComponent, DefaultButtonComponent, RouterLink]
})
export class RegisterPageComponent implements OnInit{

  registerForm!:FormGroup;
  isSubmited = false;

  returnUrl = '';

  constructor( private formBuilder: FormBuilder, private userService: UserService,private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', [Validators.required]],
      direccion: ['', [Validators.required, Validators.minLength(10)]]
    }, {
      validators: PasswordMatchValidator('password', 'confirmPassword')
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }

  get fc() {
    return this.registerForm.controls;
  }

  submit() {
    this.isSubmited = true;
    if(this.registerForm.invalid) return;

    const fv = this.registerForm.value;

    const user : IUserRegister = {
      nombre: fv.nombre,
      email: fv.email,
      password: fv.password,
      confirmPassword: fv.confirmPassword,
      direccion: fv.direccion
    };

    this.userService.register(user).subscribe(_ => {
      this.router.navigateByUrl(this.returnUrl);
    })
  }
}
