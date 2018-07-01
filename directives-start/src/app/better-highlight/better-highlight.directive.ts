import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor:string = 'black';
  @Input() defaultBackgroundColor:string = 'transparent';
  @Input() highlightColor:string = 'white';
  @Input() highlightBackgroundColor:string = 'blue';

  @HostBinding('style.color') color:string;
  @HostBinding('style.backgroundColor') backgroundColor:string;

  constructor(private elRef:ElementRef, private renderer:Renderer2) {}

  ngOnInit()
  {
    this.color = this.defaultColor;
    this.backgroundColor = this.defaultBackgroundColor;
  }

  @HostListener('mouseenter') mouseEnter(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    // this.renderer.setStyle(this.elRef.nativeElement,'color','white');
    this.color = this.highlightColor;
    this.backgroundColor = this.highlightBackgroundColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
    // this.renderer.setStyle(this.elRef.nativeElement,'color','black');
    this.color = this.defaultColor;
    this.backgroundColor = this.defaultBackgroundColor;
  }

}
