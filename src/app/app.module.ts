import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedUiModule } from '@store/shared/ui';

import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    SharedUiModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
