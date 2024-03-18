import {CommonModule} from "@angular/common";
import { NgModule } from "@angular/core";
import { PaginationComponent } from './components/pagination/pagination.component';
import {UtilsService} from "../../services/utils.service";
import {RouterLink} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [PaginationComponent],
  declarations: [
    PaginationComponent
  ],
  providers: [
    UtilsService
  ]
})
export class PaginationModule {}
