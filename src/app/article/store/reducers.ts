import { createReducer, on } from "@ngrx/store";
import { ArticleStateInterface } from "../types/articleState.interface";
import {
  getArticleAction,
  getArticleFailureAction, getArticleSuccessAction,
} from "./actions/getArticle.action";
import {routerNavigatedAction} from "@ngrx/router-store";

const initialState : ArticleStateInterface = {
    isLoading: false,
    error: null,
    data: null
}

export const articleReducer = createReducer(
    initialState,
    on(getArticleAction, (state): ArticleStateInterface => ({
        ...state,
        isLoading: true
    })),
    on(getArticleSuccessAction, (state, action): ArticleStateInterface => ({
        ...state,
        isLoading: false,
        data: action.article
    })),
    on(getArticleFailureAction, (state): ArticleStateInterface => ({
        ...state,
        isLoading: false
    })),
    on(routerNavigatedAction, (): ArticleStateInterface => initialState)
)
