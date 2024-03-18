import { Component } from '@angular/core';

@Component({
  selector: 'mc-your-feed',
  templateUrl: './your-feed.component.html',
  styleUrl: './your-feed.component.scss'
})
export class YourFeedComponent {
  apiUrl: string = '/articles/feed'
}
