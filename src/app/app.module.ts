import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StoreModule,} from "@ngrx/store";
import {RouterModule, Routes} from "@angular/router";
import {AuthModule} from "./Auth/Auth.module";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {HttpClientModule} from "@angular/common/http";
import {CounterComponent} from './counter/counter.component';
import {counterReducer} from "./NgRx/counter.reducer";

const routes: Routes = [
  {
    path: '',
    component: CounterComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AuthModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({counter: counterReducer}),
    StoreDevtoolsModule.instrument(
      {
        maxAge: 25,
        logOnly: environment.production
      }
    )
  ],
  providers: [StoreModule, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
