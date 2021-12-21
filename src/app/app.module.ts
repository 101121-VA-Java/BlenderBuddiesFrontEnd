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
import { FancyNavComponent } from './components/fancy-nav/fancy-nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UniquePipe } from './unique.pipe';
import { ProfileUpdateComponent } from './components/profile-update/profile-update.component';
import { ProfileComponent } from './components/profile/profile.component';



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
    AdmindashComponent,
    FancyNavComponent,
    UniquePipe,
    ProfileComponent,
    ProfileUpdateComponent

  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }