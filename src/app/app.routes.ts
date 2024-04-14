import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductComponent } from './pages/product/product.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'home', title: "Innovix", component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: "full"},
  { path: 'profile', title: "My Account", component: ProfileComponent },
  { path: 'register', title: "Sign Up", component: RegisterComponent },
  { path: 'cart', title: "Cart", component: CartComponent },
  { path: 'checkout', title: "Checkout", component: CheckoutComponent },
  { path: 'login', title: "Login", component: LoginComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: '**', title: "Page not found", component: PageNotFoundComponent },
];
