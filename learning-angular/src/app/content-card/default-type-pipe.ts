import { Pipe, PipeTransform } from '@angular/core';
import {Content} from './app.content-card-helper';

@Pipe({
    name: 'dType'
})
export class DefaultTypePipe implements PipeTransform {

    transform(currentContent: Content, dType?: string): string {
        return Content.type || dType || 'News';
    }

}