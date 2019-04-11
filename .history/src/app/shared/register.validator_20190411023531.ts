
import { FormGroup } from '@angular/forms';
// import  from '../register/register.component';
export class RegistrationValidator {
    static validate(registerForm: FormGroup) {
        const password = registerForm.controls.password.value;
        const confirmPassword = registerForm.controls.confirmPassword.value;
        console.log(confirmPassword);
 
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