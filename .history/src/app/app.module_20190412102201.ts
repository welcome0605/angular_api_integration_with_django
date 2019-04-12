import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';;
import { TransactionBalanceComponent } from './transaction-balance/transaction-balance.component';
import { MatNativeDateModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import  }

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        HttpClientModule,
        BrowserAnimationsModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent
,
        TransactionBalanceComponent    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }