import { Order } from '../../../shared/models/Order';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarroService } from '../../../services/carro.service';
import { UserService } from '../../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { TitleComponent } from "../../partials/title/title.component";
import { TextInputComponent } from "../../partials/text-input/text-input.component";
import { OrderItemsListComponent } from "../../partials/order-items-list/order-items-list.component";
import { MapComponent } from '../../partials/map/map.component';

@Component({
    selector: 'app-checkout-page',
    standalone: true,
    templateUrl: './checkout-page.component.html',
    styleUrl: './checkout-page.component.css',
    imports: [TitleComponent, ReactiveFormsModule, TextInputComponent, OrderItemsListComponent, MapComponent]
})
export class CheckoutPageComponent implements OnInit{
  order:Order = new Order();
  checkoutForm!:FormGroup;
  constructor(carroService:CarroService, private formBuilder:FormBuilder, private userService:UserService, private toastrService:ToastrService) {
    const cart = carroService.getCarro();
    this.order.items = cart.items;
    this.order.totalPrice = cart.precioTotal;
  }

  ngOnInit(): void {
    let { nombre, direccion } = this.userService.currentUser;

    this.checkoutForm = this.formBuilder.group({
      nombre:[nombre, Validators.required],
      direccion:[direccion, Validators.required]
    });
  }

  get fc() {
    return this.checkoutForm.controls;
  }

  createOrder() {
    if(this.checkoutForm.invalid) {
      this.toastrService.warning('Porfavor llene los campos', 'Campos Invalidos');
      return;
    }

    this.order.nombre = this.fc.nombre.value;
    this.order.direccion = this.fc.direccion.value;

    console.log(this.order);
  }


}
