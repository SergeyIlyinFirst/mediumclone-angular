import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {PopularTagType} from "../../../../types/popularTag.type";
import {errorSelector, isLoadingSelector, popularTagsSelector} from "../../store/selectors";
import {getPopularTagsAction} from "../../store/actions/getPopularTags.action";

@Component({
  selector: 'mc-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrl: './popular-tags.component.scss'
})
export class PopularTagsComponent implements OnInit {
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  popularTags$: Observable<PopularTagType[] | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchFeed()
  }

  initializeValues() {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.popularTags$ = this.store.pipe(select(popularTagsSelector));
  }

  fetchFeed() {
    this.store.dispatch(getPopularTagsAction())
  }
}
