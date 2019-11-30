import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {

    id: number;
    constructor( private route: ActivatedRoute) {}

  ngOnInit() {
      this.route.paramMap.subscribe(params => { this.id =
          +params.get('id'); });
      this.route.paramMap.subscribe(params => {
          this.id = +params.get('id');
          this.contentService.getContentItem(this.id).subscribe(
              c => {this.content = c; console.log(this.content);
              });
      });
  }

}
