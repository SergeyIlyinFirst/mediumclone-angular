import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction
} from "../actions/getPopularTags.action";
import {PopularTagType} from "../../../../types/popularTag.type";
import {PopularTagsService} from "../../services/popularTags.service";

@Injectable()
export class GetPopularTagsEffect {
  constructor(
    private actions$: Actions,
    private popularTagsService: PopularTagsService) {}

  getPopularTags$ = createEffect(() => this.actions$.pipe(
    ofType(getPopularTagsAction),
    switchMap(() => {
      return this.popularTagsService.getPopularTags().pipe(
        map((popularTags: PopularTagType[]) => {
          return getPopularTagsSuccessAction({ popularTags })
        }),
        catchError(() => {
          return of(getPopularTagsFailureAction())
        })
      )
    })
  ))
}
