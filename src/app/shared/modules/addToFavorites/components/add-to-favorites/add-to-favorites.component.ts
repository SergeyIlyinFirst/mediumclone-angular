import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {addToFavoritesAction} from "../../store/actions/addToFavorites.action";

@Component({
  selector: 'mc-add-to-favorites',
  templateUrl: './add-to-favorites.component.html',
  styleUrl: './add-to-favorites.component.scss'
})
export class AddToFavoritesComponent implements OnInit {
  @Input('isFavorited') isFavoritedProps: boolean
  @Input('articleSlug') articleSlugProps: string
  @Input('favoritesCount') favoritesCountProps: number

  favoritesCount: number
  isFavorited: boolean

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.favoritesCount = this.favoritesCountProps
    this.isFavorited = this.isFavoritedProps
  }

  handleLike() {
    this.store.dispatch(addToFavoritesAction(
      {
        isFavorited: this.isFavorited,
        slug: this.articleSlugProps
      })
    )
    if(this.isFavorited) {
      this.favoritesCount = this.favoritesCount - 1
    }
    else {
      this.favoritesCount = this.favoritesCount + 1
    }

    this.isFavorited = !this.isFavorited
  }
}
