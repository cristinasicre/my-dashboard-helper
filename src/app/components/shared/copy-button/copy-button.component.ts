import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-copy-button',
  templateUrl: './copy-button.component.html',
  styleUrls: ['./copy-button.component.css']
})
export class CopyButtonComponent implements OnInit {

  @Input() copyToClipboard: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
