import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, UserService } from '../_services';
// import { RegistrationValidator } from '../shared/register.validator';

@Component({templateUrl: 'register.component.html'})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    // pwd = "";
    // c_pwd = "";

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
            confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
        },
        {validator: this.passwordMatchValidator}
        );
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        console.log("ok");
        console.log(this.f.errors);

        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    passwordMatchValidator(frm: FormGroup) {
        return true;
        // if(frm.controls.password.value === frm.controls.confirmPassword.value) return true;
        // else return false;
        // return frm.controls.password.value === frm.controls.confirmPassword.value ? null : {'mismatch': true};
    }
}
