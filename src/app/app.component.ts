import {Component, OnInit} from '@angular/core';
import {isArrayEqual} from "@angular/compiler-cli/src/ngtsc/incremental/semantic_graph";

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

  constructor() {
  }

  ngOnInit(): void {
  }
}
