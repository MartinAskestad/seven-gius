import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'svn-converter',
  templateUrl: './converter.component.html',
  styles: []
})
export class ConverterComponent implements OnInit {
  C = 5;
  F = 0;
  constructor() {}

  ngOnInit() {
    this.convertCtoF(this.C);
  }

  convertCtoF(c: number) {
    this.F = c * (9 / 5) + 32;
  }

  convertFtoC(f: number) {
    this.C = (f - 32) * (5 / 9);
  }
}
