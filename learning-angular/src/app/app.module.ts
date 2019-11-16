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

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    ContentCardComponent,
    ContentListComponent,
    TextDecorationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, ContentCardComponent]
})
export class AppModule { }
