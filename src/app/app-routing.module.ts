import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { SmoothieFormComponent } from './components/smoothie-form/smoothie-form.component';
import { SmoothiesComponent } from './components/smoothies/smoothies.component';
import { AuthGuard } from './admin.guard';
import { Role } from './models/role';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { ProfileUpdateComponent } from './components/profile-update/profile-update.component';
import { UsersComponent } from './components/users/users.component';
import { RecipeComponent } from './components/recipe/recipe.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'login',
  component: LoginComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'smoothie-form',
  component: SmoothieFormComponent,
  canActivate: [AuthGuard]
},
{
  path: 'profile',
  component: ProfileComponent,
  canActivate: [AuthGuard]
},
{
  path: 'profile-update',
  component: ProfileUpdateComponent,
  canActivate: [AuthGuard]
},
{
  path: 'smoothies',
  component: SmoothiesComponent,
  canActivate: [AuthGuard],
},
{
  path: 'ingredients',
  component: IngredientsComponent,
  canActivate: [AuthGuard],
  data: { roles: ['ADMIN'] }
},
{
  path: 'users',
  component: UsersComponent,
  canActivate: [AuthGuard],
  data: { roles: ['ADMIN'] }
},
{
  path: 'recipe',
  component: RecipeComponent,
  canActivate: [AuthGuard],
},
{ path: '**', redirectTo: '' }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
