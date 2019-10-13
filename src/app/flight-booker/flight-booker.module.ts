import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlightBookerRoutingModule } from './flight-booker-routing.module';
import { FlightBookerComponent } from './flight-booker.component';
import { DateValidatorDirective } from './date-validator.directive';
import { DateRangeValidatorDirective } from './date-range--validator.directive';

@NgModule({
  declarations: [FlightBookerComponent, DateValidatorDirective, DateRangeValidatorDirective],
  imports: [CommonModule, FlightBookerRoutingModule, FormsModule]
})
export class FlightBookerModule {}
