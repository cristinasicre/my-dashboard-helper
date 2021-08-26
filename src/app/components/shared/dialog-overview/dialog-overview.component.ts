import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/models/data';

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.css'],
})
export class DialogOverviewComponent implements OnInit {

  monitorFilter = new FormControl('');

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {
    this.monitorFilter = this.fb.control([]);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onFilterMonitor() {
    this.dialogRef.close({monitor: this.monitorFilter.value});
  }
}
