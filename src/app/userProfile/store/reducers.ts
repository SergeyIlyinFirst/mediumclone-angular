import { createReducer, on } from "@ngrx/store";
import {UserProfileStateInterface} from "../types/userProfileState.interface";
import {
  getUserProfileAction,
  getUserProfileActionFailureAction,
  getUserProfileActionSuccessAction
} from "./actions/getUserProfile.action";

const initialState: UserProfileStateInterface = {
  data: null,
  isLoading: false,
  error: null
}

export const userProfileReducer = createReducer(
  initialState,
  on(getUserProfileAction, (state): UserProfileStateInterface => ({
    ...state,
    isLoading: true
  })),
  on(getUserProfileActionSuccessAction, (state, action): UserProfileStateInterface => ({
    ...state,
    isLoading: false,
    data: action.userProfile
  })),
  on(getUserProfileActionFailureAction, (state): UserProfileStateInterface => ({
    ...state,
    isLoading: false
  }))
)
