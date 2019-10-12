import { Component } from '@angular/core';

@Component({
  selector: 'svn-counter',
  templateUrl: './counter.component.html',
  styles: []
})
export class CounterComponent {
  T = 0;

  count() {
    this.T++;
  }
}
