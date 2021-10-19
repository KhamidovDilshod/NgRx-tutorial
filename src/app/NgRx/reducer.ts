import {AuthStateInterface} from "../Interface/AuthState.interface";
import {createReducer, on} from "@ngrx/store";
import {registerAction} from "./action";

const initialState: AuthStateInterface = {
  isSubmitting:false
}
const authReducer=createReducer(initialState,)
