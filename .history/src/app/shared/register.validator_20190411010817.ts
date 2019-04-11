
import { FormGroup } from '@angular/forms';
 
export class RegistrationValidator {
    static validate(registerForm: FormGroup) {
        var password = registerForm.controls.password.value;
        var confirmPassword = registerForm.controls.confirmPassword.value;
 
        if (confirmPassword.length <= 0) {
            return null;
        }
 
        if (confirmPassword !== password) {
            return {
                doesMatchPassword: true
            };
        }
 
        return null;
 
    }
}