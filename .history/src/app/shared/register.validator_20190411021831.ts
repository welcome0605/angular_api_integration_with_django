
import { FormGroup } from '@angular/forms';
export class RegistrationValidator {
    static validate(registerForm: FormGroup) {
        const password = registerForm.controls.password.value;
        const confirmPassword = registerForm.controls.confirmPassword.value;
        console.log();
 
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