import {CommonModule} from "@angular/common";
import {Input, NgModule, OnInit} from "@angular/core";
import { FeedTogglerComponent } from './components/feed-toggler/feed-toggler.component';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {isLoggedInSelector} from "../../../auth/store/selectors";
import {RouterLink, RouterLinkActive} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [FeedTogglerComponent],
  declarations: [
    FeedTogglerComponent
  ],
  providers: [

  ]
})
export class FeedTogglerModule {}

