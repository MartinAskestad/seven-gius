import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConverterComponent } from './converter/converter.component';
import { TemperatureRoutingModule } from './temperature-routing.module';

@NgModule({
  declarations: [ConverterComponent],
  imports: [CommonModule, TemperatureRoutingModule]
})
export class TemperatureModule {}
