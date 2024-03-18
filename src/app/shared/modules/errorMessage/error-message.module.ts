import {CommonModule} from "@angular/common";
import { NgModule } from "@angular/core";
import { ErrorMessageComponent } from './components/errorMessage/error-message.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ErrorMessageComponent
  ],
  declarations: [
    ErrorMessageComponent
  ],
  providers: [
  ]
})
export class ErrorMessageModule {}
