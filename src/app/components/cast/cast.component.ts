import { Component, Input } from '@angular/core';
import { CastMovie } from 'src/app/models/Cast';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
})
export class CastComponent {
  @Input() cast!: CastMovie;
}
