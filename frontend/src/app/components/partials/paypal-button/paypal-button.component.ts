import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { CarroService } from '../../../services/carro.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Order } from '../../../shared/models/Order';

//window.paypal
declare var paypal: any;

@Component({
  selector: 'paypal-button',
  standalone: true,
  imports: [],
  templateUrl: './paypal-button.component.html',
  styleUrl: './paypal-button.component.css'
})
export class PaypalButtonComponent implements OnInit{
  @Input()
  order!:Order;

  @ViewChild('paypal', {static: true})
  paypalElement!:ElementRef;

  constructor(private orderService: OrderService,
              private carroService: CarroService,
              private router:Router,
              private toastrService: ToastrService) { }

  ngOnInit(): void {
    const self = this;
    paypal
    .Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                currency_code: 'CAD',
                value: self.order.totalPrice,
              },
            },
          ],
        });
      },

      onApprove: async (data: any, actions: any) => {
        const payment = await actions.order.capture();
        this.order.paymentId = payment.id;
        self.orderService.pay(this.order).subscribe(
          {
            next: (orderId) => {
              this.carroService.limpiarCarro();
              this.router.navigateByUrl('/track/' + orderId);
              this.toastrService.success(
                'Pago guardado Correctamente!',
                'Exito'
              );
            },
            error: (error) => {
              this.toastrService.error('El pago guardado fallo', 'Error');
            }
          }
        );
      },

      onError: (err: any) => {
        this.toastrService.error('Pago fallido', 'Error');
        console.log(err);
      },
    })
    .render(this.paypalElement.nativeElement);

  }
}
