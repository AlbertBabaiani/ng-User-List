import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './home/hero/hero.component';
import { SideBarComponent } from './home/side-bar/side-bar.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { UserComponent } from './admin/user-list/user/user.component';
import { UserDetailsComponent } from './admin/user-list/user-details/user-details.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroComponent,
    SideBarComponent,
    AdminComponent,
    AddUserComponent,
    UserListComponent,
    UserComponent,
    UserDetailsComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
