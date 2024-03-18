import {CommonModule} from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import {PopularTagsService} from "./services/popularTags.service";
import {popularTagsReducer} from "./store/reducers";
import {GetPopularTagsEffect} from "./store/effects/getPopularTags.effect";
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';
import {LoadingModule} from "../loading/loading.module";
import {ErrorMessageModule} from "../errorMessage/error-message.module";
import {RouterLink} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetPopularTagsEffect]),
    StoreModule.forFeature('popularTags', popularTagsReducer),
    LoadingModule,
    ErrorMessageModule,
    RouterLink
  ],
  exports: [PopularTagsComponent],
  declarations: [
    PopularTagsComponent
  ],
  providers: [
    PopularTagsService
  ]
})
export class PopularTagsModule {}
