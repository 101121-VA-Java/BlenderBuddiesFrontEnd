import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmoothiesComponent } from './components/smoothies/smoothies.component';
import { UsersComponent } from './components/users/users.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SmoothieFormComponent } from './components/smoothie-form/smoothie-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UniquePipe } from './unique.pipe';
import { ProfileUpdateComponent } from './components/profile-update/profile-update.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FooterComponent } from './components/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    SmoothiesComponent,
    UsersComponent,
    RecipeComponent,
    IngredientsComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    SmoothieFormComponent,
    UniquePipe,
    ProfileComponent,
    ProfileUpdateComponent,
    FooterComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }