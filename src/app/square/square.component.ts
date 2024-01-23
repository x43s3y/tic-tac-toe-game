import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule],
  template: `<button style="background-color: gray; border-radius: 25px;" *ngIf="!value">{{ value }}</button>
             <button style="background-color: rgb(139, 184, 50); border-radius: 25px;color: yellow;" *ngIf="value == 'X'"> {{ value }} </button>
             <button style="background-color: rgb(150, 88, 41);border-radius: 25px;color: yellow;" *ngIf="value == 'O'"> {{ value }} </button>
             `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent {
  @Input() value: 'X' | 'O' = 'X';
}
