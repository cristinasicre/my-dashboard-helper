import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Bookmark } from 'src/app/models/data';
import { DialogBookmarksComponent } from '../dialog-bookmarks/dialog-bookmarks.component';

@Component({
  selector: 'app-card-extended',
  templateUrl: './card-extended.component.html',
  styleUrls: ['./card-extended.component.css'],
})
export class CardExtendedComponent implements OnInit {
  constructor(  public dialog: MatDialog) {}

  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() bookmarks: Bookmark[] = [];

  @Output() action = new EventEmitter<Bookmark>();
  @Output() addBookmark = new EventEmitter<Bookmark>();
  ngOnInit(): void {}
  openURL(name: string, url:string) {
    this.action.emit({name, url});
  }

  addMarker(){
    // const dialogRef = this.dialog.open(DialogBookmarksComponent, {
    //   width: '250px'
    // });
    // dialogRef.afterClosed().subscribe((result) => {
    //   this.addBookmark.emit(result);
    // });
  }

  
}
