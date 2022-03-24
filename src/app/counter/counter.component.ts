import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {customIncrement, decrement, increment, reset} from "../NgRx/action.types";
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
    private store: Store<{ counter: { counter: any } }>
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
}
