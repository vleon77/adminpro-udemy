import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{SettingsService,SharedService,SidebarService} from './index.service'



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[SettingsService,
    SharedService,
    SidebarService]
})
export class ServiceModule { }
