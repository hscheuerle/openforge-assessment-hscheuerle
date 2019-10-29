import { Directive, Input, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorBreak]'
})
export class ColorBreakDirective implements OnInit {
  @Input() appColorBreak: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.appColorBreak) {
      this.renderer.setAttribute(this.el.nativeElement, 'color', 'secondary');
    } else {
      this.renderer.setAttribute(this.el.nativeElement, 'color', 'primary');
    }
  }
}
