import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding,Input } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit {
  @Input('defaultColor') defaultColor:string = 'blue';
  @Input('highlightColor') highlightColor:string = 'transparent';
  @HostBinding("style.backgroundColor") backgroundColor:string = this.defaultColor ;

  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
    this.backgroundColor = this.defaultColor ;
  }

  @HostListener('mouseenter') mouseEnter(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','transparent');
    this.backgroundColor = this.defaultColor;
  }

}
