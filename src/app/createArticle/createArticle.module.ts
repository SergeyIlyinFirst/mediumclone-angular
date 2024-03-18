import {CommonModule} from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import {RouterLink, RouterModule, Routes} from "@angular/router";
import {ErrorMessageModule} from "../shared/modules/errorMessage/error-message.module";
import {LoadingModule} from "../shared/modules/loading/loading.module";
import { CreateArticleComponent } from './components/create-article/create-article.component';
import {ArticleFormModule} from "../shared/modules/articleForm/articleForm.module";
import {CreateArticleService} from "./services/createArticle.service";
import {CreateArticleEffect} from "./store/effects/createArticle.effect";
import {createArticleReducer} from "./store/reducers";

const routes: Routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([CreateArticleEffect]),
    StoreModule.forFeature('createArticle', createArticleReducer),
    RouterLink,
    ErrorMessageModule,
    LoadingModule,
    RouterModule.forChild(routes),
    ArticleFormModule
  ],
  declarations: [
    CreateArticleComponent
  ],
  providers: [
    CreateArticleService
  ]
})
export class CreateArticleModule {}
