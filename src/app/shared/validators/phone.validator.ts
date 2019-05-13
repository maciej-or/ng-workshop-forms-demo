import { AbstractControl, ValidationErrors } from '@angular/forms';
import { parsePhoneNumber } from 'libphonenumber-js';

export const validatePhone = (control: AbstractControl): ValidationErrors | null => {

  if (control.value === null ||  control.value.length === 0) {
    return null;
  }

  try {
    const phoneNumber = parsePhoneNumber(control.value, 'PL');
    if (phoneNumber.isValid()) {
      return null;
    }
  } catch (error) {
    //
  }

  return { phone: true };
};
