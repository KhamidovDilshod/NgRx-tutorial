import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { RegisterComponent } from './register/register.component';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

const routes:Routes=[
  {
    path:'register',
    component:RegisterComponent
  }
]
@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes), ReactiveFormsModule
  ],
  exports: [
    RegisterComponent
  ],
  declarations: [
    RegisterComponent
  ]
})
export class AuthModule{

}
