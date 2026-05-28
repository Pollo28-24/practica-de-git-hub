import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-view-proyect',
  imports: [],
  templateUrl: './viewProyect.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewProyect {}
