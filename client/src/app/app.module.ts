import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SurveyFormComponent } from './components/survey-form/survey-form.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { SurveyItemComponent } from './components/survey-item/survey-item.component';
import { TokenGenerateComponent } from './components/token-generate/token-generate.component';

const appRoutes: Routes = [
  { path: '', component: SurveyFormComponent },
  { path: 'token', component: TokenGenerateComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SurveyFormComponent,
    RegisterComponent,
    LoginComponent,
    SurveyItemComponent,
    TokenGenerateComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
