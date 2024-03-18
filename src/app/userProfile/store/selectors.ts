import { createFeatureSelector, createSelector } from "@ngrx/store";
import {UserProfileStateInterface} from "../types/userProfileState.interface";

export const getUserProfileFeatureSelector = createFeatureSelector<UserProfileStateInterface>('userProfile')
export const isLoadingSelector = createSelector(getUserProfileFeatureSelector, ((getUserProfileState: UserProfileStateInterface) => getUserProfileState.isLoading))
export const errorSelector = createSelector(getUserProfileFeatureSelector, ((getUserProfileState: UserProfileStateInterface) => getUserProfileState.error))
export const getUserProfileSelector = createSelector(getUserProfileFeatureSelector, ((getUserProfileState: UserProfileStateInterface) => getUserProfileState.data))
