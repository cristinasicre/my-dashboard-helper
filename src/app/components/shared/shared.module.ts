import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { DialogDataComponent } from './dialog-data/dialog-data.component';
import { CardExtendedComponent } from './card-extended/card-extended.component';
import { DialogBookmarksComponent } from './dialog-bookmarks/dialog-bookmarks.component';

@NgModule({
  declarations: [
    DialogOverviewComponent,
    NavbarComponent,
    DialogDataComponent,
    CardExtendedComponent,
    DialogBookmarksComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  exports: [
    DialogOverviewComponent,
    NavbarComponent,
    DialogDataComponent,
    CardExtendedComponent,
    MaterialModule,
  ],
})
export class SharedModule {}
