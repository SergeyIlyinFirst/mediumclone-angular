import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { PersistanceService } from "src/app/shared/services/persistance.service";
import {Router} from "@angular/router";
import {logoutAction} from "../actions/sync.action";

@Injectable()
export class LogoutEffect {
  constructor(
    private actions$: Actions,
    private persistanceService: PersistanceService<string>,
    private router: Router) {}

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(logoutAction),
    tap(() => {
      this.persistanceService.set('accessToken', '')
      this.router.navigateByUrl('/')
    })
  ), {dispatch: false})
}
