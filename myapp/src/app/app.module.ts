import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { userComponent } from './User/user.component';
import { registerComponent } from './Registration/register.component';

const appRoutes: Routes = [
  {
    path: '',    redirectTo: 'login',    pathMatch: 'full'  },
  { path: 'login', component: userComponent },
  { path: 'signup', component: registerComponent }
  //{ path: '**', component: registerComponent }
];

@NgModule({

  declarations: [
    AppComponent, userComponent, registerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
