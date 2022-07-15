import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {customDecrement, customIncrement, decrement, increment, Login, reset} from "../NgRx/action.types";
import {Observable, Subject, Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {debounceTime, map, switchMap, tap} from "rxjs/operators";

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
  result$: Observable<any> = new Observable();
  searchSubject$: Subject<any> = new Subject<string>();
  searchString: any;

  constructor(
    private store: Store<{ counter: { counter: any }, login: { login: any } }>,
    private http: HttpClient,
  ) {
  }


  ngOnInit(): void {
    this.result$ = this.searchSubject$
      .pipe(
        debounceTime(200),
        tap(console.log),
        switchMap(searchString => this.queryAPI(searchString))
      )

  }

  queryAPI(searchString: any) {
    return this.http.get<any>(`https://www.reddit.com/search.json?q=${searchString}`)
      .pipe(
        map(result => result['data']['children'])
      )
  }

  inputChanged($event: any) {
    this.searchSubject$.next($event)
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

  closure(name: string) {
    return (surname: string) => {
      return name + surname
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
