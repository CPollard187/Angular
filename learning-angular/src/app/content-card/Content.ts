import {Content} from "@angular/compiler/src/render3/r3_ast";
//Not used
export interface Content {
    contentId: number;
    author: string;
    type?: string;
    imageUrl?: string;
    body: string;
    tags?: string[];

}

// contentItem: Content = {
//     contentId: 1,
//     author: "Cody Pollard",
//     type: "Games",
//     body: "The greatest game ever made",
//     imageUrl: "https://pixabay.com/illustrations/minecraft-wallpaper-background-2053882/"
// }