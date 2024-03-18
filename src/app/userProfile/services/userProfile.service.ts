import { environment } from "src/environments/environment";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {ProfileInterface} from "../../shared/types/profile.interface";
import {GetUserProfileResponseInterface} from "../types/getUserProfileResponse.interface";

@Injectable()
export class UserProfileService {
  constructor(private http: HttpClient){}

  getUserProfile(slug: string): Observable<ProfileInterface> {
    const fullUrl = `${environment.apiUrl}/profiles/${slug}`;
    return this.http
      .get<GetUserProfileResponseInterface>(fullUrl)
      .pipe(map((response: GetUserProfileResponseInterface) =>
      {
        return response.profile
      }))
  }
}
