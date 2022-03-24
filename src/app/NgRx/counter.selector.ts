import {createFeatureSelector, createSelector} from "@ngrx/store";

const getCounterState = createFeatureSelector<any>('counter');

export const getCounter = createSelector(getCounterState, (element) => {
  return element.counter;
})
