import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {customDecrement, customIncrement, decrement, increment, Login, reset} from "../NgRx/action.types";
import {interval, Observable, Subscription} from "rxjs";
import {getCounter} from "../NgRx/counter.selector";
import {HttpClient} from "@angular/common/http";

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
  posts$!: Observable<any>;

  constructor(
    private store: Store<{ counter: { counter: any }, login: { login: any } }>,
    private http: HttpClient
  ) {
  }


  ngOnInit(): void {
    this.posts$ = this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
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

const timeStamp = (): Observable<any> => {
  return new Observable<any>((subscriber) => {
    const stamp = Date.now();
    subscriber.next(stamp)

  })
}
