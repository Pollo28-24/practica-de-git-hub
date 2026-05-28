import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  constructor() {
    console.log('Navbar component initialized');
  }
}
