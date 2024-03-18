import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { FeedModule } from "../shared/modules/feed/feed.module";
import {BannerModule} from "../shared/modules/banner/banner.module";
import {PopularTagsModule} from "../shared/modules/popularTags/popularTags.module";
import {FeedTogglerModule} from "../shared/modules/feedToggler/feedToggler.module";
import {YourFeedComponent} from "./components/your-feed/your-feed.component";

const routes: Routes = [
    {
        path: 'feed',
        component: YourFeedComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FeedModule,
        BannerModule,
        PopularTagsModule,
        FeedTogglerModule
    ],
    declarations: [
        YourFeedComponent
    ],
    providers: [

    ]
})
export class YourFeedModule {}
