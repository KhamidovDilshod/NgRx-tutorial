import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {StoreModule,} from "@ngrx/store";
import {RouterModule} from "@angular/router";
import {AuthModule} from "./Auth/Auth.module";
import {ReactiveFormsModule} from "@angular/forms";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AuthModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(
      {
        maxAge:25,
        logOnly:environment.production
      }
    )
  ],
  providers: [StoreModule,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
