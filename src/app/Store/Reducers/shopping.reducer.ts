import {ShoppingItem} from "../Model/shopping-list.model";
import {ShoppingAction, ShoppingActionTypes} from "../Actions/shopping.action";
import {filter} from "rxjs/operators";

const InitialState: Array<ShoppingItem> = [
  {
    id: "1223-432143-532f-4324n45nui4b",
    name: "Macbook"
  }
]

export function ShoppingReducer(state: Array<ShoppingItem> = InitialState, action: ShoppingAction) {
  switch (action.type) {
    case ShoppingActionTypes.ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
    case ShoppingActionTypes.DELETE_ITEM:
      return [...state, action.payload]
  }
}
