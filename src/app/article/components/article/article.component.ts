import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {combineLatest, map, Observable, Subscription} from "rxjs";
import {articleSelector, errorSelector, isLoadingSelector} from "../../store/selectors";
import {ActivatedRoute, Router} from "@angular/router";
import {ArticleInterface} from "../../../shared/types/article.interface";
import {currentUserSelector} from "../../../auth/store/selectors";
import {CurrentUserInterface} from "../../../shared/types/currentUser.interface";
import {deleteArticleAction} from "../../store/actions/deleteArticle.action";
import {getArticleAction} from "../../store/actions/getArticle.action";

@Component({
  selector: 'mc-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit, OnDestroy {
  slug: string
  article: ArticleInterface | null
  articleSubscription: Subscription
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  isAuthor$: Observable<boolean | null>

  constructor(private store: Store, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
    this.fetchData()
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe()
  }

  initializeValues() {
    this.slug = this.route.snapshot.paramMap.get('slug')!
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.isAuthor$ = combineLatest(
      this.store.pipe(select(articleSelector)),
      this.store.pipe(select(currentUserSelector))
    ).pipe(map(([article, currentUser]: [ArticleInterface | null, CurrentUserInterface | null]) =>  {
      return article && currentUser && article.author.username === currentUser.username
    }))
  }

  initializeListeners() {
    this.articleSubscription = this.store
      .pipe(select(articleSelector))
      .subscribe((article: ArticleInterface | null) => {
        this.article = article
      })
  }

  fetchData() {
    this.store.dispatch(getArticleAction({slug: this.slug}))
  }

  deleteArticle(): void{
    this.store.dispatch(deleteArticleAction({slug: this.slug}))
  }
}
