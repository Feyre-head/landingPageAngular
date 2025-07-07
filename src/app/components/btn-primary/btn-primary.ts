import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
// import { EventEmitter } from 'node:stream';

type BtnVariants = "primary" | "secondary" ;

@Component({
  selector: 'btn-primary',
  standalone: true,
  templateUrl: './btn-primary.html',
  styleUrls: ['./btn-primary.scss'],
})
export class BtnPrimary {
  @Input() btnText: string = '';
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;

  @Output('submit') onSubmit = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }
}

