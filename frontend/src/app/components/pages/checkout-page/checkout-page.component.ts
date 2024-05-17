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
import { OrderService } from '../../../services/order.service';
import { Router } from '@angular/router';

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
  constructor(carroService:CarroService, private formBuilder:FormBuilder, private userService:UserService, private toastrService:ToastrService, private orderService:OrderService,
    private router:Router ) {
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

    if(!this.order.direccionLatLng){
      this.toastrService.warning('Por favor seleccionar una Ubicacion en el mapa', 'Ubicacion');
      return;
    }

    this.order.nombre = this.fc.nombre.value;
    this.order.direccion = this.fc.direccion.value;

    this.orderService.create(this.order).subscribe({
      next:() => {
        this.router.navigateByUrl('/payment');
      },
      error:(errorResponse) => {
        this.toastrService.error(errorResponse.error, 'Cart');
      }
    })
  }


}
