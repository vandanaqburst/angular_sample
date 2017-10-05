import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {
  QuestionComponent,
  HeaderComponent
} from './components/index'


import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'questions', component: QuestionComponent },
  { path: '', component: HeaderComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
