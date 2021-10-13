import {Component, OnInit} from '@angular/core';
import {isArrayEqual} from "@angular/compiler-cli/src/ngtsc/incremental/semantic_graph";
// @ts-ignore
import {AppState} from "./Store/App.state.model";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NgRX';
  calculate: string | undefined;
  result: any;
  small: any;
  big: any;

  constructor( private store:Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.select(store=>store.shopping)
  }
}
