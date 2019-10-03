import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './content-card/content-card-helper.ts';
@Pipe({ name: 'contentTagged' })
export class ContentTaggedPipe implements PipeTransform {
    transform(contentList: Content[]) {
        return contentList.filter(c => c.tags != null ?
            c.tags.length : null);
    }
}