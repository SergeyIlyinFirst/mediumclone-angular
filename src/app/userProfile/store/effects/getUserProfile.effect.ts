import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import {Router} from "@angular/router";
import {
  getUserProfileAction,
  getUserProfileActionFailureAction,
  getUserProfileActionSuccessAction
} from "../actions/getUserProfile.action";
import {UserProfileService} from "../../services/userProfile.service";
import {ProfileInterface} from "../../../shared/types/profile.interface";

@Injectable()
export class GetUserProfileEffect {
  constructor(
    private actions$: Actions,
    private userProfileService: UserProfileService,
    private router: Router) {}

  getUserProfile$ = createEffect(() => this.actions$.pipe(
    ofType(getUserProfileAction),
    switchMap(({slug}) => {
      return this.userProfileService.getUserProfile(slug).pipe(
        map((userProfile: ProfileInterface) => {
          return getUserProfileActionSuccessAction({ userProfile })
        }),
        catchError(() => {
          return of(getUserProfileActionFailureAction())
        })
      )
    })
  ))
}
