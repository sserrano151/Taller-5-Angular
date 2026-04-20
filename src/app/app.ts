import { Component } from '@angular/core';
import { SerieListComponent } from './series/serie-list/serie-list';

@Component({
  selector: 'app-root',
  imports: [SerieListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'taller-angular';
}