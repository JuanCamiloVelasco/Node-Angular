import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PaginaComidaComponent } from './components/pages/pagina-comida/pagina-comida.component';
import { PaginaCarroComponent } from './components/pages/pagina-carro/pagina-carro.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { authGuard } from './auth/guards/auth.guard';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'search/:searchTerm', component:HomeComponent},
    {path:'tag/:tag', component:HomeComponent},
    {path:'comida/:id', component:PaginaComidaComponent},
    {path:'pagina-carro', component:PaginaCarroComponent},
    {path:'login', component:LoginPageComponent},
    {path:'register', component:RegisterPageComponent},
    {path:'checkout', component:CheckoutPageComponent, canActivate:[authGuard]}
];
