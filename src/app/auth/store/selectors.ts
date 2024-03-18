import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";

export const authFeatureSelector = createFeatureSelector<AuthStateInterface>('auth')
export const isSubmittingSelector = createSelector(authFeatureSelector, ((authState: AuthStateInterface) => authState.isSubmitting))
export const validationErrorsSelector = createSelector(authFeatureSelector, (authState: AuthStateInterface) => { return authState.validationErrors })
export const isLoggedInSelector = createSelector(authFeatureSelector, (authState: AuthStateInterface) => { return authState.isLoggedIn })
export const isAnonymousSelector = createSelector(authFeatureSelector, (authState: AuthStateInterface) => { return authState.isLoggedIn === false })
export const currentUserSelector = createSelector(authFeatureSelector, (authState: AuthStateInterface) => { return authState.currentUser })