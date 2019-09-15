import { Component, OnInit } from '@angular/core';
//import {Content} from "@angular/compiler/src/render3/r3_ast";
//import {Content} from "./content-card.component.spec";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {

    title = "Cody's Favourite Games";

    contentList:ContentList;

    content1:Content = {
        contentId: 1,
        author: "Cody Pollard",
        type: "Games",
        body: "Minecraft. The greatest game ever made.",
        imageUrl: "https://pixabay.com/illustrations/minecraft-wallpaper-background-2053882/"
    }
    content2:Content = {
        contentId: 2,
        author: "Cody Pollard",
        type: "Games",
        body: "Call of Duty. 2nd greatest game ever made.",
        imageUrl: "https://www.flickr.com/photos/65092514@N08/19785006552"
    }
    content3:Content = {
        contentId: 3,
        author: "Cody Pollard",
        type: "Games",
        body: "Mario Kart. The 3rd greatest game ever made.",
        imageUrl: "https://www.flickr.com/photos/antdude3001/14159923329"
    }

    ngOnInit() {
        this.contentList = new ContentList();
        this.contentList.addItems(this.content1);
        this.contentList.addItems(this.content2);
        this.contentList.addItems(this.content3);
    }
}

export class ContentList {
    _item: Content[];
    constructor() {
        this._item = [];
    }

    //Gets the content from the array
    get items(): Content[] {
        return this._item;
    }

    //add 1 to the array
    addItems(item) {
        this._item.push(item)
        //return ++ContentList.contentAmount;
    }

    //Return the number of items in the items array
    numOfItems(){
        return this._item.length;
    }

    //Get the item from a certain index location
    getItemIndex(index:number) {
        return "<h2>ID:</h2> " + this._item[index].contentId +
            "<br/> <h2>Author:</h2> " + this._item[index].author +
            "<br/> <h2>Type</h2> " + this._item[index].type +
            "<br/> <h2>Body:</h2> " + this._item[index].body +
            "<br/> " + this._item[index].imageUrl + "<br/> <br/> ";
    }
}

    export interface Content {
    contentId: number;
    author: string;
    type?: string;
    imageUrl?: string;
    body: string;
    tags?: string[];
}