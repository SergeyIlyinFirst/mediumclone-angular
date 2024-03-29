import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import {Router} from "@angular/router";
import {ArticleInterface} from "../../../shared/types/article.interface";
import {getArticleAction, getArticleFailureAction, getArticleSuccessAction} from "../actions/getArticle.action";
import {ArticleService as SharedArticleService} from "../../../shared/services/article.service";

@Injectable()
export class GetArticleEffect {
  constructor(
    private actions$: Actions,
    private sharedArticleService: SharedArticleService,
    private router: Router) {}

  getArticle$ = createEffect(() => this.actions$.pipe(
    ofType(getArticleAction),
    switchMap(({slug}) => {
      return this.sharedArticleService.getArticle(slug).pipe(
        map((article: ArticleInterface) => {
          return getArticleSuccessAction({ article })
        }),
        catchError(() => {
          return of(getArticleFailureAction())
        })
      )
    })
  ))
}
