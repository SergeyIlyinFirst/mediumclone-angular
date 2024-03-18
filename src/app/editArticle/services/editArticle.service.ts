import { environment } from "src/environments/environment";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {ArticleInputInterface} from "../../shared/types/articleInput.interface";
import {ArticleInterface} from "../../shared/types/article.interface";
import {SaveArticleResponseInterface} from "../../shared/types/saveArticleResponse.interface";

@Injectable()
export class EditArticleService {
  constructor(private http: HttpClient){}

  updateArticle(slug: string, articleInput: ArticleInputInterface): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;
    return this.http
      .put<SaveArticleResponseInterface>(fullUrl, articleInput)
      .pipe(map((response: SaveArticleResponseInterface) =>
      {
        return response.article
      }))
  }
}
