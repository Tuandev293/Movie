import { Component } from '@angular/core';
import { LoaderService } from './Service/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(public loader: LoaderService) {}
  title = 'movie';
}
