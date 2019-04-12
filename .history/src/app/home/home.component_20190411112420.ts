import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

import { User } from '../_models';
import { UserService,AlertService } from '../_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({templateUrl: 'home.component.html', styleUrls: ['home.component.css']})
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(private formBuilder: FormBuilder,
                private router: Router,
                private userService: UserService,
                private alertService: AlertService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(" this.currentUser");
    }

    ngOnInit() {
        this.loadAllUsers();
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phoneNumber: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(8)]],
            confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
        });
    }

        get f() { return this.registerForm.controls; }

    // deleteUser(id: number) {
    //     this.userService.delete(id).pipe(first()).subscribe(() => { 
    //         this.loadAllUsers() 
    //     });
    // }

    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => { 
            this.users = users; 
        });
    }
}

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { first } from 'rxjs/operators';

// import { AlertService, UserService } from '../_services';
// // import { RegistrationValidator } from '../shared/register.validator';

// @Component({templateUrl: 'register.component.html'})
// export class RegisterComponent implements OnInit {
//     registerForm: FormGroup;
//     loading = false;
//     submitted = false;
//     // pwd = "";
//     // c_pwd = "";

//     constructor(
//         private formBuilder: FormBuilder,
//         private router: Router,
//         private userService: UserService,
//         private alertService: AlertService) { }

//     ngOnInit() {
//         this.registerForm = this.formBuilder.group({
//             firstName: ['', Validators.required],
//             lastName: ['', Validators.required],
//             email: ['', [Validators.required, Validators.email]],
//             phoneNumber: ['', Validators.required],
//             password: ['', [Validators.required, Validators.minLength(8)]],
//             confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
//         });
//     }

//     // convenience getter for easy access to form fields
//     get f() { return this.registerForm.controls; }

//     onSubmit() {
//         this.submitted = true;
//         if (this.registerForm.invalid) {
//             return;
//         }
//         console.log("ok");
//         // console.log(this.registerForm);

//         this.loading = true;
//         this.userService.register(this.registerForm.value)
//             .pipe(first())
//             .subscribe(
//                 data => {
//                     this.alertService.success('Registration successful', true);
//                     this.router.navigate(['/login']);
//                 },
//                 error => {
//                     this.alertService.error(error);
//                     this.loading = false;
//                 });
//     }

//     passwordMatchValidator() {
//         // return false;
//         // if(frm.controls.password.value === frm.controls.confirmPassword.value) return true;
//         // else return false;
//         return this.registerForm.controls.password.value === this.registerForm.controls.confirmPassword.value ? true : false;
//     }
// }
