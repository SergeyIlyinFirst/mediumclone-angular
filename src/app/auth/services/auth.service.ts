import { Injectable } from "@angular/core";
import { RegisterRequestInterface } from "../types/registerRequest.interface";
import { Observable, map } from "rxjs";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { AuthResponseInterface } from "../types/authResponse.interface";
import { LoginRequestInterface } from "../types/loginRequest.interface";
import {CurrentUserInputInterface} from "../../shared/types/currentUserInput.interface";
import {UpdateCurrentUserRequestInterface} from "../types/updateCurrentUserRequest.interface";

@Injectable()
export class AuthService {
    constructor(private http: HttpClient){}

    getUser(response: AuthResponseInterface): CurrentUserInterface {
        return response.user
    }

    register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
        const url = environment.apiUrl + '/users'

        return this.http
            .post<AuthResponseInterface>(url, data)
            .pipe(map(this.getUser))
    }

    login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
        const url = environment.apiUrl + '/users/login'

        return this.http
            .post<AuthResponseInterface>(url, data)
            .pipe(map(this.getUser))
    }

    getCurrentUser(): Observable<CurrentUserInterface> {
        const url = environment.apiUrl + '/user'

        return this.http
            .get<AuthResponseInterface>(url)
            .pipe(map(this.getUser))
    }

    updateCurrentUser(currentUserInput: UpdateCurrentUserRequestInterface): Observable<CurrentUserInterface> {
      const url = environment.apiUrl + '/user'

      return this.http
        .put<AuthResponseInterface>(url, currentUserInput)
        .pipe(map(this.getUser))
    }
}
