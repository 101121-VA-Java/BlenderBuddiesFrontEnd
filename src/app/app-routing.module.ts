import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IngrFormComponent } from './components/ingr-form/ingr-form.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SmoothieFormComponent } from './components/smoothie-form/smoothie-form.component';
import { SmoothiesComponent } from './components/smoothies/smoothies.component';
import { UserDashComponent } from './components/user-dash/user-dash.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'login',
  component: LoginComponent
},{
  path: 'userdash',
  component: UserDashComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'smoothie-form',
  component: SmoothieFormComponent
},
{
  path: 'inger-form',
  component: IngrFormComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
