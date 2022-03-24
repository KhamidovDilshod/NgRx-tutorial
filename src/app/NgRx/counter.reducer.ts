import {Action, createReducer, on} from "@ngrx/store";
import {initialState} from "./counter.state";
import {customIncrement, decrement, increment, reset} from "./action.types";

export const _counterReducer = createReducer(initialState, on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1
    }
  }),
  on(reset, (el) => {
    return {
      ...el,
      counter: 0
    }
  }),
  on(customIncrement, (state, action) => {
    console.log(action);
    return {
      ...state,
      counter: state.counter + action.value
    }
  }));

export function counterReducer(state: { counter: number; } | undefined, action: Action) {
  return _counterReducer(state, action)
}
