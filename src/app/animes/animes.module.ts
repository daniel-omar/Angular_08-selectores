import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';

import { AnimesRoutingModule } from './animes-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SelectComponent } from './components/select/select.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    SelectorPageComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    AnimesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatButtonModule
  ]
})
export class AnimesModule { }
