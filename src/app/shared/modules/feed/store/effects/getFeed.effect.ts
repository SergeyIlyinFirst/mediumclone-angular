import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { FeedService } from "../../services/feed.service";
import { getFeedAction, getFeedFailureAction, getFeedSuccessAction } from "../actions/getFeedAction";
import { GetFeedResponseInterface } from "../../types/getFeedResponse.interface";

@Injectable()
export class GetFeedEffect {
    constructor(
        private actions$: Actions,
        private feedService: FeedService) {}

    getFeed$ = createEffect(() => this.actions$.pipe(
        ofType(getFeedAction),
        switchMap(({url}) => {
            return this.feedService.getFeed(url).pipe(
                map((feed: GetFeedResponseInterface) => {
                    return getFeedSuccessAction({ feed })
                }),
                catchError(() => {
                    return of(getFeedFailureAction())
                })
            )
        })
    ))
}