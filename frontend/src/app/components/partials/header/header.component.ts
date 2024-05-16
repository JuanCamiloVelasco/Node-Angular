import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarroService } from '../../../services/carro.service';
import { NgIf } from '@angular/common';
import { UserService } from '../../../services/user.service';
import { User } from '../../../shared/models/User';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  cantidadCarro=0;
  user!:User;
  constructor(carroService:CarroService, private userService:UserService){
    carroService.getCarroObservable().subscribe((newCarro) => {
      this.cantidadCarro = newCarro.cantidadTotal;
    })

    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
  }

  logout(){
    this.userService.logout();
  }

  get isAuth() {
    return this.user.token
  }
}
