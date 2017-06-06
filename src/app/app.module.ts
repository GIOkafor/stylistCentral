import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { StarRatingModule } from 'angular-star-rating';

import { StylistService } from './stylist/stylist.service';

import { HeaderComponent } from './header/header.component';
import { FeedComponent } from './feed/feed.component';
import { ListingComponent } from './listing/listing.component';
import { RegisterStylist } from './stylist/register-stylist-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedComponent,
    ListingComponent,
    RegisterStylist
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
        {
          path: '', redirectTo: '/feed', pathMatch: 'full'
        },
        {
          path: 'feed',
          component: FeedComponent
        },
        {
          path: 'register',
          component: RegisterStylist
        }
      ]),
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    StarRatingModule
  ],
  providers: [ StylistService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
