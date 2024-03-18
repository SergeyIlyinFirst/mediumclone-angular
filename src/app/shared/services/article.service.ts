import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { GetArticleResponseInterface } from "../types/getArticleResponse.interface";

@Injectable()
export class ArticleService {
    constructor(private http: HttpClient){}

    getFeed(url: string): Observable<GetArticleResponseInterface> {
        const fullUrl = environment.apiUrl + url;

        return this.http.get<GetArticleResponseInterface>(fullUrl)
    }
}
