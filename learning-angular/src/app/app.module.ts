import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SafePipe } from './safe.pipe';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { TextDecorationDirective } from './text-decoration.directive';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule} from 'angular-inmemory-web-api';
import { InMemoryDataService} from './in-memory-data.service';
import "hammerjs";
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { CreateContentComponentComponent } from './create-content-component/create-content-component.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    ContentCardComponent,
    ContentListComponent,
    TextDecorationDirective,
    CreateContentComponentComponent,
    ContentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      MatButtonModule,
      MatInputModule,
      RouterModule.forRoot([
          { path: 'content/:id', component: ContentDetailComponent },
          { path: 'content', component: ContentListComponent }
      ]),
      ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })

  ],
  providers: [],
  bootstrap: [AppComponent, ContentCardComponent]
})
export class AppModule { }
