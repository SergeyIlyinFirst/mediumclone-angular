import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './components/settings/settings.component';
import {StoreModule} from "@ngrx/store";
import {settingsReducer} from "./store/reducers";
import {ReactiveFormsModule} from "@angular/forms";
import {BackendErrorMessagesModule} from "../shared/modules/backendErrorMessages/backendErrorMessages.module";

const routes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('settings', settingsReducer),
    ReactiveFormsModule,
    BackendErrorMessagesModule
  ],
  declarations: [
    SettingsComponent
  ],
  providers: [

  ]
})
export class SettingsModule {}
