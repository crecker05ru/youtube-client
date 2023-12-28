import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const checkNotFutureDate = ():ValidatorFn => (
  control: AbstractControl<string | Date>,
): ValidationErrors | null => {
  const currentTime = new Date().getTime();
  const valueTime = new Date(control.value).getTime();
  return valueTime > currentTime ? {
    futureDate: true,
  } : null;
};
