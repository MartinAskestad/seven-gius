import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'counter',
    loadChildren: () =>
      import('./counter/counter.module').then(m => m.CounterModule)
  },
  {
    path: 'temperature',
    loadChildren: () =>
      import('./temperature/temperature.module').then(m => m.TemperatureModule)
  },
  {
    path: 'flight-booker',
    loadChildren: () =>
      import('./flight-booker/flight-booker.module').then(
        m => m.FlightBookerModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
