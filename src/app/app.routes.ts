import { Routes } from '@angular/router';
import { SignIn } from './sign-in/sign-in';
import { SignUp } from './sign-up/sign-up';
import { AddPlat } from './add-plat/add-plat';

export const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: SignIn },
  { path: 'signup', component: SignUp },
  { path: 'addplat', component: AddPlat },
  { path: '**', redirectTo: 'signin' }
];