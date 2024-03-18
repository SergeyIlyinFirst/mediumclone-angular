import {CommonModule, NgOptimizedImage} from "@angular/common";
import { NgModule } from "@angular/core";
import { ArticleComponent } from './components/article/article.component';
import { EffectsModule } from "@ngrx/effects";
import { GetArticleEffect } from "./store/effects/getArticle.effect";
import { StoreModule } from "@ngrx/store";
import { ArticleService as SharedArticleService } from "../shared/services/article.service";
import {RouterLink, RouterModule, Routes} from "@angular/router";
import {ErrorMessageModule} from "../shared/modules/errorMessage/error-message.module";
import {LoadingModule} from "../shared/modules/loading/loading.module";
import {articleReducer} from "./store/reducers";
import {TagListModule} from "../shared/modules/tagList/tagList.module";
import {ArticleService} from "./services/article.service";
import {DeleteArticleEffect} from "./store/effects/deleteArticle.effect";

const routes: Routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    StoreModule.forFeature('article', articleReducer),
    RouterLink,
    ErrorMessageModule,
    LoadingModule,
    RouterModule.forChild(routes),
    NgOptimizedImage,
    TagListModule
  ],
    declarations: [
        ArticleComponent
    ],
    providers: [
        SharedArticleService,
        ArticleService
    ]
})
export class ArticleModule {}
