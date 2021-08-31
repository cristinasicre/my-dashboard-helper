import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [DialogOverviewComponent, NavbarComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  exports: [DialogOverviewComponent, NavbarComponent],
})
export class SharedModule {}
