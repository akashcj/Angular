import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector:'[appDropdown]'
})
export class DropdownDirective implements OnInit{

  open:boolean = false;

  constructor(private elementRef:ElementRef, private renderer:Renderer2) {
    console.log ("In constructor");
   }

  ngOnInit(){
    console.log("In Init");
  }

  @HostListener('click') clicked(eventData:Event){
    console.log("In listener, value of open is:" + this.open);
    if (!this.open)
    {
      console.log(this.renderer);
      console.log(this.elementRef);
      this.renderer.addClass(this.elementRef.nativeElement,"open");
      this.open = true;
    }
    else
    {
      this.renderer.removeClass(this.elementRef.nativeElement,"open");
      this.open = false;
    }
    console.log("open value is now:" + this.open);
  }
}
