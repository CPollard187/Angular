import { Injectable } from '@angular/core';
import { Content} from './content-card/content-card-helper';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
    createDb() {
        const content: Content[] =

        return {content};
    }

        constructor() { }
}
