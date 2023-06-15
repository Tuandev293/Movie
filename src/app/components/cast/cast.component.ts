import { Component, Input } from '@angular/core';
import { Cast } from 'src/app/models/Cast';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
})
export class CastComponent {
  @Input() cast!: Cast[];
}
