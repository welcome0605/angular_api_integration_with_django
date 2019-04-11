
import { FormGroup } from '@angular/forms';
 
export class RegistrationValidator {
    static validate(registerForm: FormGroup) {
        var password = registerForm.controls.password.value;
        var repeatPassword = registerForm.controls.confirmPassword.value;
 
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