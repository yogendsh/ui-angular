import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  onClick(){
this.route.navigateByUrl('thrid');
  }

}
