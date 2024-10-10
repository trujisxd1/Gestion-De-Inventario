import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransaccionRoutingModule } from './transaccion-routing.module';
import { TrasanccionPageComponent } from './pages/trasanccion-page/trasanccion-page.component';
import { ListTrasaccionComponent } from './pages/list-trasaccion/list-trasaccion.component';
import { NewTrasaccionComponent } from './pages/new-trasaccion/new-trasaccion.component';
import { MaterialModule } from '../material/material.module';
import { TableTransaccionComponent } from './components/table-transaccion/table-transaccion.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TrasanccionPageComponent,
    ListTrasaccionComponent,
    NewTrasaccionComponent,
    TableTransaccionComponent,

  ],
  imports: [
    CommonModule,
    TransaccionRoutingModule,MaterialModule,ReactiveFormsModule
  ]
})
export class TransaccionModule { }
