import {
  Directive, ElementRef, Input, OnInit,
} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appColorDate]',
})

export class ColorDateDirective implements OnInit {
  @Input() backgroundColor = '#ff00ff';

  @Input() itemDate: Date | string = '';

  private currentDate: Date = new Date();

  constructor(private element: ElementRef) {
    // this.element.nativeElement.style.backgroundColor = this.backgroundColor;
  }

  ngOnInit(): void {
    const itemDate = new Date(this.itemDate);
    if (itemDate instanceof Date) {
      const diff = (this.currentDate.getTime() - itemDate.getTime()) / (1000 * 60 * 60 * 24);
      // const diff = this.currentDate.getMonth() - this.itemDate.getMonth()
      // + (12 * (this.currentDate.getFullYear() - this.itemDate.getFullYear()));
      if (diff < 7) {
        this.element.nativeElement.style.backgroundColor = '#0000ff';
      } else if (diff > 7 && diff < 30) {
        this.element.nativeElement.style.backgroundColor = '#00ff00';
      } else if (diff > 30 && diff < 180) {
        this.element.nativeElement.style.backgroundColor = '#ffff00';
      } else if (diff >= 180) {
        this.element.nativeElement.style.backgroundColor = '#ff0000';
      }
    }
    // if (this.itemDate === '1') {
    //   this.element.nativeElement.style.backgroundColor = '#ff0000';
    // } else if (this.itemDate === '2') {
    //   this.element.nativeElement.style.backgroundColor = '#ffff00';
    // } else if (this.itemDate === '3') {
    //   this.element.nativeElement.style.backgroundColor = '#ffff00';
    // } else if (this.itemDate === '4') {
    //   this.element.nativeElement.style.backgroundColor = '#ffff00';
    // }
  }
}
