import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MachineComponent } from './machine/machine.component';
import { MachineDetailsComponent } from './machine-details/machine-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card'
import {MatExpansionModule} from '@angular/material/expansion';
import {MatAccordionHarness} from '@angular/material/expansion/testing';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Machine } from "./machine/machine-model";
import { machineService } from './machineService';
@NgModule({
  declarations: [
    AppComponent,
    MachineComponent,
    MachineDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatExpansionModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [machineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
