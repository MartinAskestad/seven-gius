import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator
} from '@angular/forms';

@Directive({
  selector: '[svnDateRangeValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DateRangeValidatorDirective,
      multi: true
    }
  ]
})
export class DateRangeValidatorDirective implements Validator {
  @Input('svnDateRangeValidator')
  valueB: string;
  validate(controlA: AbstractControl): ValidationErrors {
    console.group('date range validator');
    console.log('controlA', controlA);
    console.log('controlB', this.valueB);
    console.groupEnd();
    if (!controlA && !this.valueB) {
      return null;
    }

    const dateA = new Date(controlA.value);
    const dateB = new Date(this.valueB);
    if (dateA < dateB) {
      return { invalid: true };
    }
  }
}
