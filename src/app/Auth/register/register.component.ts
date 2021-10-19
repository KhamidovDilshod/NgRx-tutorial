import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {registerAction} from "../../NgRx/action";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;
  detail: any;

  constructor(private fb: FormBuilder, private store: Store, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      Username: ['', Validators.required],
      password: ['', Validators.required]
    })
    if (this.form.valid) {
    }
  }

  login() {
  }

  initializeForm() {
    console.log('initializeForm')

  }

  onSubmit(form: FormGroup) {
    console.log(form.value)
    this.store.dispatch(registerAction(this.form.value))
  }
}
