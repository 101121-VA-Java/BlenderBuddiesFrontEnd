import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './components/admindash/admindash.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
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
},{
  path: 'profile',
  component: ProfileComponent
},{
  path: 'admindash',
  component: AdmindashComponent
},{
  path: 'smoothies',
  component: SmoothiesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
