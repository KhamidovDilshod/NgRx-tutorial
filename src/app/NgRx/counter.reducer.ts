import {Action, createReducer, on} from "@ngrx/store";
import {initialState, LoginState} from "./counter.state";
import {customDecrement, customIncrement, decrement, increment, Login, reset} from "./action.types";

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
  }),
  on(customDecrement, (state, action) => {
    console.log(action);
    return {
      ...state,
      counter: state.counter - action.value
    }
  }));

export function counterReducer(state: { counter: number; } | undefined, action: Action) {
  return _counterReducer(state, action)
}

export const _loginReducer = createReducer(LoginState,
// @ts-ignore
  on(Login, (state, action) => {
    return {
      ...state,
      isLoggedIn: action.isLoggedIn,
      token: action.token,
      username: action.username
    }
  }))
