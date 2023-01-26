import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {
  MatInputModule,
  MatButtonModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [
    MatToolbarModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MaterialModule {}
