import {Action} from "@ngrx/store";
import {ShoppingItem} from "../Model/shopping-list.model";

export enum ShoppingActionTypes {
  ADD_ITEM = '[SHOPPING] Add Item ',
  DELETE_ITEM = '[SHOPPING] Delete Item',
  ADD_ITEM_SUCCESS = '[SHOPPING] Add_Item_Success',
  REMOVE_ITEM = '[SHOPPING] Remove_Item'
}

export class AddItemAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM;

  constructor(public payload: ShoppingItem) {
  }
}

export class DeleteItemAction implements Action {
  readonly type = ShoppingActionTypes.DELETE_ITEM;

  constructor(public payload: ShoppingItem) {
  }
}

export class AddItemSuccess implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM_SUCCESS

  constructor(public payload: ShoppingItem) {
  }
}

export class RemoveItem implements Action {
  readonly type = ShoppingActionTypes.REMOVE_ITEM
}

export type ShoppingAction = AddItemAction | DeleteItemAction | AddItemSuccess|RemoveItem
