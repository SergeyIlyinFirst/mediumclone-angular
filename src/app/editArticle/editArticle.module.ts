import {LoadingModule} from "../shared/modules/loading/loading.module";
import {ArticleFormModule} from "../shared/modules/articleForm/articleForm.module";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {RouterModule, Routes} from "@angular/router";
import {ErrorMessageModule} from "../shared/modules/errorMessage/error-message.module";
import {EditArticleService} from "./services/editArticle.service";
import {ArticleService as SharedArticleService} from "../shared/services/article.service";
import {GetArticleEffect} from "./store/effects/getArticle.effect";
import {UpdateArticleEffect} from "./store/effects/updateArticle.effect";
import {editArticleReducer} from "./store/reducers";
import { EditArticleComponent } from './components/edit-article/edit-article.component';

const routes: Routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect, UpdateArticleEffect]),
    StoreModule.forFeature('editArticle', editArticleReducer),
    ErrorMessageModule,
    LoadingModule,
    RouterModule.forChild(routes),
    ArticleFormModule
  ],
  declarations: [
    EditArticleComponent
  ],
  providers: [
    EditArticleService, SharedArticleService
  ]
})
export class EditArticleModule {}
