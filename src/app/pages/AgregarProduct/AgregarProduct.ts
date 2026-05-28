import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-agregar-product',
  imports: [],
  templateUrl: './AgregarProduct.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgregarProduct {}
