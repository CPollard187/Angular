import { Component, OnInit } from '@angular/core';
import {Content} from './content-card-helper';
import 'hammerjs';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  content: Content[];

  constructor() { }

  ngOnInit() {
    this.content = new Array();

    this.content[0] = {
        contentId: 1,
        author: "Cody Pollard",
        type: "News",
        body: "Minecraft. The greatest game ever made.",
        title: "Gaming Rocks",
        imageUrl: "https://pixabay.com/illustrations/minecraft-wallpaper-background-2053882/"
    }
      this.content[1] = {
          contentId: 2,
          author: "Cody Pollard",
          type: "Story",
          body: "Call of Duty. The 2nd greatest game ever made.",
          title: "Gaming is da best",
          imageUrl: "https://pixabay.com/illustrations/minecraft-wallpaper-background-2053882/",
          tag: "Activision"
      }
      this.content[2] = {
          contentId: 3,
          author: "Cody Pollard",
          body: "Mario Kart. The 3rd greatest game ever made.",
          title: "Gaming For Kids",
          imageUrl: "https://pixabay.com/illustrations/minecraft-wallpaper-background-2053882/",
          tag: "Nintendo"
      }
      this.content[3] = {
          contentId: 4,
          author: "Cody Pollard",
          body: "Portal. The 4th greatest game ever made.",
          title: "Gaming For the Wise",
      }
      this.content[4] = {
          contentId: 5,
          author: "Cody Pollard",
          body: "Rocket League. The 5th greatest game ever made.",
          title: "This game is amazing",
      }
  }

}
