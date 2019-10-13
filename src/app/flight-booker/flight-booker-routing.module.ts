import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightBookerComponent } from './flight-booker.component';

const routes: Routes = [{ path: '', component: FlightBookerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightBookerRoutingModule {}
