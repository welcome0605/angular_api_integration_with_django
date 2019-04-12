﻿import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

import { User } from '../_models';
import { UserService,AlertService } from '../_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { $ } from 'protractor';

@Component({templateUrl: 'home.component.html', styleUrls: ['home.component.css']})
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    saveChangeForm  : FormGroup;
    loading = false;
    submitted = false;
    setting_card_flag = false;

    constructor(private formBuilder: FormBuilder,
                private router: Router,
                private userService: UserService,
                private alertService: AlertService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(" this.currentUser");
    }

    ngOnInit() {
        this.loadAllUsers();
        this.saveChangeForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phoneNumber: ['', Validators.required],
            oldPassword: ['', [Validators.required, Validators.minLength(8)]],
            password: ['', [Validators.required, Validators.minLength(8)]],
            confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
        });
    }

    get f() { return this.saveChangeForm.controls; }

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

    onSubmit() {
        this.submitted = true;
        if (this.saveChangeForm.invalid) {
            return;
        }
        console.log("ok");
        // console.log(this.registerForm);

        // this.loading = true;
        // this.userService.register(this.saveChangeForm.value)
        //     .pipe(first())
        //     .subscribe(
        //         data => {
        //             this.alertService.success('Registration successful', true);
        //             this.router.navigate(['/login']);
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
    }

    addCompany() {
        $('.componies').add( 'div' ).addClass( ' class="col-md-4"' );
    }
}
