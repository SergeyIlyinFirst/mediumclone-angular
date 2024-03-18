import {CommonModule} from "@angular/common";
import { NgModule } from "@angular/core";
import { FeedComponent } from './components/feed/feed.component';
import { EffectsModule } from "@ngrx/effects";
import { GetFeedEffect } from "./store/effects/getFeed.effect";
import { StoreModule } from "@ngrx/store";
import { feedReducer } from "./store/reducers";
import { FeedService } from "./services/feed.service";
import {RouterLink} from "@angular/router";
import {ErrorMessageModule} from "../errorMessage/error-message.module";
import {LoadingModule} from "../loading/loading.module";
import {PaginationModule} from "../pagination/pagination.module";
import {TagListModule} from "../tagList/tagList.module";
import {AddToFavoritesModule} from "../addToFavorites/addToFavorites.module";

@NgModule({
    imports: [
        CommonModule,
        EffectsModule.forFeature([GetFeedEffect]),
        StoreModule.forFeature('feed', feedReducer),
        RouterLink,
        ErrorMessageModule,
        LoadingModule,
        PaginationModule,
        TagListModule,
        AddToFavoritesModule
    ],
    exports: [FeedComponent],
    declarations: [
        FeedComponent
    ],
    providers: [
        FeedService
    ]
})
export class FeedModule {}
