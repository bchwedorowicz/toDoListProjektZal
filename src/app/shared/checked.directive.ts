import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChecked]'
})
export class CheckedDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    let li = this.elRef.nativeElement;
    this.renderer.setStyle(li, 'list-style-image', 'url(/assets/checked.png');
    this.renderer.setStyle(li, 'background', 'lightblue');
  }
}
