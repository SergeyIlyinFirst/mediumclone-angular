import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProfileInterface} from "../../../shared/types/profile.interface";
import {combineLatest, filter, map, Observable, Subscription} from "rxjs";
import {select, Store} from "@ngrx/store";
import {getUserProfileAction} from "../../store/actions/getUserProfile.action";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {errorSelector, getUserProfileSelector, isLoadingSelector} from "../../store/selectors";
import {currentUserSelector} from "../../../auth/store/selectors";
import {CurrentUserInterface} from "../../../shared/types/currentUser.interface";

@Component({
  selector: 'mc-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit, OnDestroy {
  userProfile: ProfileInterface
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  userProfileSubscription$: Subscription
  slug: string
  apiUrl: string
  isCurrentUserProfile$: Observable<boolean>

  constructor(private store: Store, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
  }

  ngOnDestroy(): void {
    this.userProfileSubscription$.unsubscribe()
  }

  fetchData() {
    this.store.dispatch(getUserProfileAction({slug: this.slug}))
  }

  initializeValues() {
    this.slug = this.route.snapshot.paramMap.get('slug')!
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.isCurrentUserProfile$ = combineLatest(
      this.store.pipe(select(getUserProfileSelector), filter(Boolean)),
      this.store.pipe(select(currentUserSelector), filter(Boolean))
    ).pipe(map(([profile, currentUser]: [ProfileInterface, CurrentUserInterface]) =>  {
      return profile.username === currentUser.username
    }))
  }

  initializeListeners() {
    this.userProfileSubscription$ = this.store.pipe(select(getUserProfileSelector), filter(Boolean))
      .subscribe((userProfile: ProfileInterface) => {
        this.userProfile = userProfile
      })

    this.route.params.subscribe((params: Params) => {
      this.slug = this.route.snapshot.paramMap.get('slug')!
      this.fetchData()
    })
  }

  getApiUrl(): string {
    return this.router.url.includes('favorites')
      ? `/articles?favorited=${this.slug}`
      : `/articles?author=${this.slug}`
  }
}
