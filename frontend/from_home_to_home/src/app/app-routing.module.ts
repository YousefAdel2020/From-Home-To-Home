import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateChiefComponent } from './Components/update-chief/update-chief.component';
import { ProfileChiefComponent } from './Components/profile-chief/profile-chief.component';
import { DishesComponent } from './Components/dishes/dishes.component';
import { UpdateUserComponent } from './Components/update-user/update-user.component';
import { ProfileUserComponent } from './Components/profile-user/profile-user.component';
import { CreateDishesComponent } from './Components/create-dishes/create-dishes.component';
import { UpdateDishesComponent } from './Components/update-dishes/update-dishes.component';

import { DetailsDishComponent } from './Components/details-dish/details-dish.component';
import {CartComponent} from './Components/cart/cart.component';
import {CheckoutComponent} from './Components/checkout/checkout.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { SuccessComponent } from './Components/success/success.component';
import { OrdersComponent } from './Components/orders/orders.component';

const routes: Routes = [
  {path:'updateChief/:id', component:UpdateChiefComponent},
  {path:'viewChief', component:ProfileChiefComponent},
  {path:'dishes', component:DishesComponent},
  {path:'updateUser', component:UpdateUserComponent},
  {path:'viewUser', component:ProfileUserComponent},
  {path:'contactus', component:ContactUsComponent},
{path:'createDishes', component:CreateDishesComponent},
{path:'updateDishes/:dishId', component:UpdateDishesComponent},
{path:'viewDetails/:productId', component:DetailsDishComponent},
{path:'cart', component:CartComponent},
{path:'checkout', component:CheckoutComponent},
{path:'paymentSuccessful', component:SuccessComponent},
{path:'orders', component:OrdersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
