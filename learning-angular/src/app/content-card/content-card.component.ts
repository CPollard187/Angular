import {Component, Input, OnInit} from '@angular/core';
//import {Content} from "@angular/compiler/src/render3/r3_ast";
import {Content} from "./content-card-helper";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import 'hammerjs';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

    yes = "Yes";
    no = "No";
    title = "Cody's Favourite Games";
    @Input() content: Content;


    getContent() : Observable<Content[]>{
        return this.http.get<Content[]>("api/content");
    }
    getContentItem(id): Observable<Content>{
        console.log("Getting observable content item");
        return this.http.get<Content>("api/content/" + id);
    }

    private httpOptions = {
        headers: new HttpHeaders({ 'Content-type':
                'application/json' })
    };


    addContent(content: Content): Observable<Content>{
        return this.http.post<Content>("api/content", content,
            this.httpOptions);
    }

    constructor(private http: HttpClient){
        this.getContent();
        this.addContent(this.content);
    }



    ngOnInit() {
        // this.contentList = new ContentList();
        // this.contentList.addItems(this.content1);
        // this.contentList.addItems(this.content2);
        // this.contentList.addItems(this.content3);
    }

    clickEvent(searchInput: string){
        if (searchInput == this.content.body){
            this.yes;
        }
        this.no;
    }
    // public onClick(content: Content) {
    //         console.log("contentId = " + content.contentId);
    //     }
}

// export class ContentList {
//     _item: Content[];
//     constructor() {
//         this._item = [];
//     }
//
//     //Gets the content from the array
//     get items(): Content[] {
//         return this._item;
//     }
//
//     //add 1 to the array
//     addItems(item) {
//         this._item.push(item)
//         //return ++ContentList.contentAmount;
//     }
//
//     //Return the number of items in the items array
//     numOfItems(){
//         return this._item.length;
//     }
//
//     //Get the item from a certain index location
//     getItemIndex(index:number) {
//         return "<h3>ID:</h3> " + this._item[index].contentId +
//             "<br/> <h3>Author:</h3> " + this._item[index].author +
//             "<br/> <h3>Type</h3> " + this._item[index].type +
//             "<br/> <h3>Body:</h3> " + this._item[index].body +
//             "<br/> <img src=" + this._item[index].imageUrl + "><br>";
//     }
// }

//     export interface Content {
//     contentId: number;
//     author: string;
//     type?: string;
//     imageUrl?: string;
//     body: string;
//     tags?: string[];
// }
// contentList:ContentList;
//
// content1:Content = {
//     contentId: 1,
//     author: "Cody Pollard",
//     type: "Games",
//     body: "Minecraft. The greatest game ever made.",
//     imageUrl: "https://pixabay.com/illustrations/minecraft-wallpaper-background-2053882/"
// }
// content2:Content = {
//     contentId: 2,
//     author: "Cody Pollard",
//     type: "Games",
//     body: "Call of Duty. 2nd greatest game ever made.",
//     imageUrl: "https://www.flickr.com/photos/65092514@N08/19785006552"
// }
// content3:Content = {
//     contentId: 3,
//     author: "Cody Pollard",
//     type: "Games",
//     body: "Mario Kart. The 3rd greatest game ever made.",
//     imageUrl: "https://www.flickr.com/photos/antdude3001/14159923329"
// }