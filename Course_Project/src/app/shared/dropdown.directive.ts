import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{

  open:boolean = false;

  constructor(private elementRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit(){
    console.log("In Init");
  }

  @HostListener('click') clicked(eventData:Event){
    console.log("In listener");
    if (!this.open)
    {
      this.renderer.addClass(this.elementRef,"open");
      this.open = true;
    }
    else
    {
      this.renderer.removeClass(this.elementRef,"open");
      this.open = false;
    }
  }
}
