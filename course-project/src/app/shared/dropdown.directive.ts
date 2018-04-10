import {Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding} from '@angular/core'
import { ViewContainerData } from '@angular/core/src/view';
@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective implements OnInit{
    // isOpen:boolean = false;
    @HostBinding("class.open") isOpen:boolean = false;

    @HostListener('click') onMouseClick(eventData:Event){
        // if (this.isOpen)
        // {
        //     this.renderer.addClass(this.elRef.nativeElement,"open");
        // }
        // else
        // {
        //     this.renderer.removeClass(this.elRef.nativeElement,"open");
        // }
        this.isOpen = !this.isOpen;
    }
    constructor(private elRef:ElementRef,private renderer:Renderer2)
    {

    }

    ngOnInit(){
        
    }

}
