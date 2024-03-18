import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import {PopularTagType} from "../../../types/popularTag.type";
import {GetPopularTagsResponseInterface} from "../types/getPopularTagsResponse.interface";

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient){}

  getPopularTags(): Observable<PopularTagType[]> {
    const url = environment.apiUrl + '/tags';

    return this.http.get<GetPopularTagsResponseInterface>(url).pipe(
      map((response: GetPopularTagsResponseInterface) => response.tags)
    )
  }
}
