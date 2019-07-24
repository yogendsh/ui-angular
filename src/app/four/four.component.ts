import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.scss']
})
export class FourComponent implements OnInit {
public tableData=[{"Name":"yogendra",
"Id":"101",
"Company":"abc"}];
  constructor() { }

  ngOnInit() {
  }

}
