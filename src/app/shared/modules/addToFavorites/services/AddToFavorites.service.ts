import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import {ArticleInterface} from "../../../types/article.interface";
import {GetArticleResponseInterface} from "../../../types/getArticleResponse.interface";

@Injectable()
export class AddToFavoritesService {
  constructor(private http: HttpClient){}

  addToFavorites(slug: string): Observable<ArticleInterface> {
    const fullUrl = this.getUrl(slug);

    return this.http.post<GetArticleResponseInterface>(fullUrl, {}).pipe(map(this.getArticle))
  }

  removeFromFavorites(slug: string): Observable<ArticleInterface> {
    const fullUrl = this.getUrl(slug);

    return this.http.delete<GetArticleResponseInterface>(fullUrl).pipe(map(this.getArticle))
  }

  getUrl(slug: string) {
    return `${environment.apiUrl}/articles/${slug}/favorite`
  }

  getArticle(response: GetArticleResponseInterface): ArticleInterface {
    return response.article
  }
}
