import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { ArticleService } from "../../../shared/services/article.service";
import { getArticleAction, getFeedFailureAction, getFeedSuccessAction } from "../actions/getArticleAction";
import { GetArticleResponseInterface } from "../../../shared/types/getArticleResponse.interface";

@Injectable()
export class GetFeedEffect {
    constructor(
        private actions$: Actions,
        private feedService: ArticleService) {}

    getFeed$ = createEffect(() => this.actions$.pipe(
        ofType(getArticleAction),
        switchMap(({url}) => {
            return this.feedService.getFeed(url).pipe(
                map((feed: GetArticleResponseInterface) => {
                    return getFeedSuccessAction({ feed })
                }),
                catchError(() => {
                    return of(getFeedFailureAction())
                })
            )
        })
    ))
}
