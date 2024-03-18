import { createFeatureSelector, createSelector } from "@ngrx/store";
import {EditArticleStateInterface} from "../types/editArticle.interface";

export const editArticleFeatureSelector = createFeatureSelector<EditArticleStateInterface>('editArticle')
export const isSubmittingSelector = createSelector(editArticleFeatureSelector, ((createArticleState: EditArticleStateInterface) => createArticleState.isSubmitting))
export const isLoadingSelector = createSelector(editArticleFeatureSelector, ((createArticleState: EditArticleStateInterface) => createArticleState.isLoading))
export const validationErrorsSelector = createSelector(editArticleFeatureSelector, (createArticleState: EditArticleStateInterface) => createArticleState.validationErrors)
export const articleSelector = createSelector(editArticleFeatureSelector, ((createArticleState: EditArticleStateInterface) => createArticleState.article))
