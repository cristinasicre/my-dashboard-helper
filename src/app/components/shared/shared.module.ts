import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { DialogDataComponent } from './dialog-data/dialog-data.component';

@NgModule({
  declarations: [DialogOverviewComponent, NavbarComponent, DialogDataComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  exports: [DialogOverviewComponent, NavbarComponent,DialogDataComponent],
})
export class SharedModule {}
