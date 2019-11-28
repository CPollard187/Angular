import { Directive, ElementRef, Input, HostListener } from '@angular/core';


@Directive({
  selector: '[appTextDecoration]'
})
export class TextDecorationDirective {

    constructor(private elm: ElementRef) {
        // elm.nativeElement.style.underline = "black";
    }

    @Input('appTextDecoration') style: string;

    //When the move the mouse on an item
    //pulls which style (underline/bold) from the switch statement
    @HostListener('mouseon') onMouseEnter() {
        this.decoration(this.style);
    }

    //When you move the mouse off an item take away the decoration
    @HostListener('mouseoff') onMouseLeave() {
        this.decoration("none");
    }

    private decoration(style) {
        switch (style) {
            case "underline":
                this.elm.nativeElement.style.textDecoration = "underline";
                break;
            case "bold":
                this.elm.nativeElement.style.fontWeight = "bold";
                break;
            case "none":
                this.elm.nativeElement.style.textDecoration = "none";
                this.elm.nativeElement.style.fontWeight = "normal";
                break;
            default:
                break;
        }


    }
}
