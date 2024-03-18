import {CommonModule} from "@angular/common";
import { NgModule } from "@angular/core";
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BannerComponent
  ],
  declarations: [
    BannerComponent
  ],
  providers: [
  ]
})
export class BannerModule {}
