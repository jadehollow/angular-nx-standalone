import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@store/shared/ui';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ShopComponent } from './shop/shop.component';
import { TaskComponent } from './task/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    ShopComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    SharedUiModule,
    RouterModule.forRoot([
      {
        path: 'cart',
        loadChildren: () => import('@store/cart').then((m) => m.CartModule),
      },
      {
        path: '**',
        component: ShopComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
