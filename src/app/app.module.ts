import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmoothiesComponent } from './components/smoothies/smoothies.component';
import { UsersComponent } from './components/users/users.component';
import { AdminsComponent } from './components/admins/admins.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { UserDashComponent } from './components/user-dash/user-dash.component';
import { RegisterComponent } from './components/register/register.component';
import { IngrFormComponent } from './components/ingr-form/ingr-form.component';
import { SmoothieFormComponent } from './components/smoothie-form/smoothie-form.component';
import { AdmindashComponent } from './components/admindash/admindash.component';


@NgModule({
  declarations: [
    AppComponent,
    SmoothiesComponent,
    UsersComponent,
    AdminsComponent,
    RecipeComponent,
    IngredientsComponent,
    NavComponent,
    LoginComponent,
    UserDashComponent,
    RegisterComponent,
    IngrFormComponent,
    SmoothieFormComponent,
    AdmindashComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
