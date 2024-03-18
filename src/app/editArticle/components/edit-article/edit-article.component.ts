import {Component, OnInit} from '@angular/core';
import {ArticleInputInterface} from "../../../shared/types/articleInput.interface";
import {filter, map, Observable} from "rxjs";
import {BackendErrorsInterface} from "../../../shared/types/backendErrors.interface";
import {select, Store} from "@ngrx/store";
import {articleSelector, isLoadingSelector, isSubmittingSelector, validationErrorsSelector} from "../../store/selectors";
import {updateArticleAction} from "../../store/actions/updateArticle.action";
import {ActivatedRoute} from "@angular/router";
import {getArticleAction} from "../../store/actions/getArticle.action";
import {ArticleInterface} from "../../../shared/types/article.interface";

@Component({
  selector: 'mc-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrl: './edit-article.component.scss'
})
export class EditArticleComponent implements OnInit {
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>
  isLoading$: Observable<boolean>
  initialValues$: Observable<ArticleInputInterface | null>
  slug: string

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  onSubmit(articleInput: ArticleInputInterface) {
    this.store.dispatch(updateArticleAction({slug: this.slug, articleInput}))
  }

  initializeValues() {
    this.slug = this.route.snapshot.paramMap.get('slug')!
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.initialValues$ = this.store.pipe(
      select(articleSelector),
      filter(Boolean),
      map((article: ArticleInterface) => {
        return {
          article: {
            title: article.title,
            description: article.description,
            body: article.body,
            tagList: article.tagList
          }
        }
      }))
  }

  fetchData() {
    this.store.dispatch(getArticleAction({slug: this.slug}))
  }
}
