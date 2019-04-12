import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

import { User } from '../_models';
import { UserService,AlertService } from '../_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';

@Component({templateUrl: 'home.component.html', styleUrls: ['home.component.css']})
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    saveChangeForm  : FormGroup;
    loading = false;
    submitted = false;
    setting_card_flag = false;
    b_id = 'c';
    i = 1;

    constructor(private formBuilder: FormBuilder,
                private router: Router,
                private userService: UserService,
                private alertService: AlertService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // console.log(" this.currentUser");
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

        $(document).ready(function(){
            $('company').click(function(){
                console.log($('company').className);
                // if ($('company').className === 'btn company btn-success') {
                //     console.log('this is button');
                // }
            });
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
        // console.log("ok");
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
        if(this.i === 10)
        {
            alert('Can not add more');
            return;
        }
        var b_id = '#';
        b_id += this.b_id;
        b_id += this.i;
        // console.log(b_id);
        $(b_id).addClass('btn-success');
        this.i++;
        // $("p").css("background-color", "yellow");
        // $('.componies').add( 'div' ).addClass( ' class="col-md-4"' );
        // const iDiv = document.createElement('div');
        // iDiv.className = 'col-md-4';
        // const iButton = document.createElement('button');
        // iButton.className = 'btn btn-success company';
        // iButton.textContent = 'Company';

        // document.getElementById('companies').appendChild(iDiv).appendChild(iButton).
        // setAttribute('Style', 'width: 200px !important;height: 200px !important;border-radius: 50%; margin-top:50px;');
        // iButton.onclick = (function (url) {
        //     return function () {
        //         intoMainPage(url);
        //     };
        // })("URL #" + i);
    }

    removeCompany() {
        if(this.i === 0)
        {
            alert('Can not remove more');
            return;
        }
        var b_id = '#';
        b_id += this.b_id;
        b_id += this.i-1;
        // console.log(b_id);
        $(b_id).removeClass('btn-success');
        this.i--;
        // const length = document.getElementById('companies').childElementCount;
        // // console.log(length);
        // if(length === 0) { return; }
        // const companies = document.getElementById('companies');
        // companies.removeChild(companies.childNodes[length - 1]);
    }

    // $(".company").onclick
}
