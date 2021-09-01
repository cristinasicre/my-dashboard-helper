import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bookmark } from 'src/app/models/data';

@Component({
  selector: 'app-card-extended',
  templateUrl: './card-extended.component.html',
  styleUrls: ['./card-extended.component.css'],
})
export class CardExtendedComponent implements OnInit {
  constructor() {}

  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() bookmarks: Bookmark[] = [];

  @Output() action = new EventEmitter<Bookmark>();

  ngOnInit(): void {}
  openURL(name: string, url:string) {
    this.action.emit({name, url});
  }
}
