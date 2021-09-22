import { Component, OnInit } from '@angular/core';
import { RESOLUTION } from 'src/app/global/resolution-messages';

@Component({
  selector: 'app-dialog-multi',
  templateUrl: './dialog-multi.component.html',
  styleUrls: ['./dialog-multi.component.css'],
})
export class DialogMultiComponent implements OnInit {
  resolutionMessages = RESOLUTION;
  subjectDate = new Date();
  constructor() {}

  ngOnInit(): void {}
}
