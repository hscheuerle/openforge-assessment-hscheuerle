import { Directive, ElementRef, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: 'ion-icon[appRepositories]',
})
export class RepositoriesDirective implements OnInit {
  @Input() appRepositories: number;

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'black';
    this.el.nativeElement.style.fill = 'white';
    this.el.nativeElement.style.borderRadius = '100%';
    this.el.nativeElement.style.border = '1px solid black';
    this.el.nativeElement.style.padding = '6px';
  }

  ngOnInit() {
    if (this.appRepositories >= 2) {
      this.el.nativeElement.style.backgroundColor = 'red';
    }
  }
}
