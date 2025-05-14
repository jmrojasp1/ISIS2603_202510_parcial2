import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatosListComponent } from './candidatos-list/candidatos-list.component';
import { CandidatosDetailComponent } from './candidatos-detail/candidatos-detail.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CandidatosListComponent,
    CandidatosDetailComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [
    CandidatosListComponent
  ]

})
export class CandidatosModule { }
