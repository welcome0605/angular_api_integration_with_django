
import { FormGroup } from '@angular/forms';
export class RegistrationValidator {
    static validate(registerForm: FormGroup) {
        const password = registerForm.controls.password.value;
        const repeatPassword = registerForm.controls.repeatPassword.value;
 
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