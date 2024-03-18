import {CommonModule} from "@angular/common";
import { NgModule } from "@angular/core";
import { ArticleFormComponent } from './components/article-form/article-form.component';
import {BackendErrorMessagesModule} from "../backendErrorMessages/backendErrorMessages.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    BackendErrorMessagesModule,
    ReactiveFormsModule
  ],
  declarations: [
    ArticleFormComponent
  ],
  exports: [
    ArticleFormComponent
  ],
  providers: [
  ]
})
export class ArticleFormModule {}
