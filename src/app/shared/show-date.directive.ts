import { Directive, HostListener, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShowDate]'
})
export class ShowDateDirective {

  @Input()
  private date: Date;
  private par;

  constructor(private elemRef: ElementRef, private renderer: Renderer2) {
    this.par = this.renderer.createElement('p');
    console.log('tworze dyrektywe');
  }

  @HostListener('mouseenter')
  mouseMoveEvent(){
    this.par.innerHTML = this.date.toLocaleDateString();
    this.renderer.appendChild(this.elemRef.nativeElement, this.par);
    console.log('mouse move');
  }

  @HostListener('mouseleave')
  mouseOutEvent(){
    this.renderer.removeChild(this.elemRef.nativeElement, this.par);
  }

}
