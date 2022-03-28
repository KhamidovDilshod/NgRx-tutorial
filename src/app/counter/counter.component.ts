import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {customDecrement, customIncrement, decrement, increment, Login, reset} from "../NgRx/action.types";
import {Observable, Subscription} from "rxjs";
import {getCounter} from "../NgRx/counter.selector";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnDestroy {
  counter: any;
  storeSubs!: Subscription;
  counter$!: Observable<{ counter: number }>
  value!: number;

  constructor(
    private store: Store<{ counter: { counter: any }, login: { login: any } }>
  ) {
  }


  ngOnInit(): void {
    this.counter$ = this.store.select(getCounter);
  }

  decrement() {
    this.store.dispatch(decrement())
  }

  reset() {
    this.store.dispatch(reset())
  }

  increment() {
    this.store.dispatch(increment())
  }

  ngOnDestroy(): void {
    if (this.storeSubs) {
      this.storeSubs.unsubscribe();
    }
  }

  add() {
    this.store.dispatch(customIncrement({value: +this.value}));
  }

  remove() {
    this.store.dispatch(customDecrement({value: this.value}))
  }

  login(username: any, token: any, isLoggedIn: any) {
    this.store.dispatch(Login({isLoggedIn: isLoggedIn, token: token, username: username}))
  }
}
