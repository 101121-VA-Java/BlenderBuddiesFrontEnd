import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './components/admindash/admindash.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { SmoothiesComponent } from './components/smoothies/smoothies.component';
import { UserDashComponent } from './components/user-dash/user-dash.component';
import { AuthGuard } from './admin.guard';
import { Role } from './models/role';


const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'login',
  component: LoginComponent
},{
  path: 'userdash',
  component: UserDashComponent,
  canActivate: [AuthGuard],
  data: { roles: [Role.USER]}
},
{
  path: 'register',
  component: RegisterComponent
},{
  path: 'profile',
  component: ProfileComponent,
  canActivate: [AuthGuard]
},{
  path: 'admindash',
  component: AdmindashComponent,
  canActivate: [AuthGuard],
  data: { roles: [Role.ADMIN]}
},{
  path: 'smoothies',
  component: SmoothiesComponent,
  canActivate: [AuthGuard],
},
{ path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
