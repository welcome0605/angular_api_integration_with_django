
import { FormGroup } from '@angular/forms';
 
export class RegistrationValidator {
    static validate(registrationFormGroup: FormGroup) {
        var password = registrationFormGroup.controls.password.value;
        var repeatPassword = registrationFormGroup.controls.repeatPassword.value;
 
        if (repeatPassword.length <= 0) {
            return null;
        }
 
        if (repeatPassword !== password) {
            return {
                doesMatchPassword: true
            };
        }
 
        return null;
 
    }
}