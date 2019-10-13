import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'svn-flight-booker',
  templateUrl: './flight-booker.component.html',
  styles: []
})
export class FlightBookerComponent implements OnInit {
  cval = '1';
  t1val = '';
  t2val = '';

  constructor() {}

  ngOnInit() {
    const today = new Date();
    this.t1val = `${today.getFullYear()}-${('0' + today.getMonth()).slice(
      -2
    )}-${('0' + today.getDate()).slice(-2)}`;
    this.t2val = `${today.getFullYear()}-${('0' + today.getMonth()).slice(
      -2
    )}-${('0' + today.getDate()).slice(-2)}`;
  }

  getT2Disabled(): string {
    return this.cval === '1' ? 'disabled' : null;
  }
}
