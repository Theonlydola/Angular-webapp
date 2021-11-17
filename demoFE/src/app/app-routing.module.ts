import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MachineDetailsComponent } from './machine-details/machine-details.component';
import { MachineComponent } from './machine/machine.component';

const routes: Routes = [{path:'machine/:TICKET_NUMBER', component: MachineDetailsComponent}, {path:'', component: MachineComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
