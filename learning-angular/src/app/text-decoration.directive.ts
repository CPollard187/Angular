import { Directive, ElementRef, Input, HostListener } from '@angular/core';


@Directive({
  selector: '[appTextDecoration]'
})
export class TextDecorationDirective {

    constructor(private elm: ElementRef) {
        // elm.nativeElement.style.underline = "black";
    }
    @Input('appTextDecoration') underlineColour: string;
    @Input('appTextDecoration') boldColour: string;


    @HostListener('mouseenter') onMouseEnter() {
        this.underline(this.underlineColour || 'black');
        this bold(this.boldColour )
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.underline(null);
    }

    private underline(color: string) {
        this.elm.nativeElement.textDecoration.style
    }


}
