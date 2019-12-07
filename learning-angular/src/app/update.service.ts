import { Injectable } from '@angular/core';
import {SwUpdate} from '@angular/service-worker';


@Injectable({
  providedIn: 'root'
})
export class UpdateService {

    constructor(updates: SwUpdate) {
        updates.available.subscribe(event => {
            console.log('Current Version:', event.current);
            console.log('Available Version:', event.available);
        });
        updates.activated.subscribe(event => {
            console.log('Older Version:', event.previous);
            console.log('New Version:', event.current);
        });
    }
}
