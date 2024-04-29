import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AdminComponent } from "./admin/admin.component";
import { ErrorComponent } from "./error/error.component";
import { NgModule } from '@angular/core';

const routes: Routes = [
    {path: '', redirectTo: 'Home', pathMatch: 'full'},

    {
        path: 'Home',
        component: HomeComponent
    },

    {
        path: 'Admin',
        component: AdminComponent,
    },

    {
        path: '**',
        component: ErrorComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
  
  