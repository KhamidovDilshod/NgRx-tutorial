import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {CreateComponent} from './create/create.component';
import {FormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {ShoppingReducer} from "./Store/Reducers/shopping.reducer";

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({shopping: ShoppingReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
