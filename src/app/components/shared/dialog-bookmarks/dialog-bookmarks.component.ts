import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/models/data';

@Component({
  selector: 'app-dialog-bookmarks',
  templateUrl: './dialog-bookmarks.component.html',
  styleUrls: ['./dialog-bookmarks.component.css'],
})
export class DialogBookmarksComponent implements OnInit {
  bookmarkForm = new FormGroup({
    name: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
  });
  constructor(
    public dialogRef: MatDialogRef<DialogBookmarksComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {}
  addMarker() {
    if (!this.bookmarkForm.invalid) {
      this.dialogRef.close(this.bookmarkForm.getRawValue());
    }
  }
}
