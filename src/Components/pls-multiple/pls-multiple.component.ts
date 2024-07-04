import { Component, Input } from '@angular/core';
import { PlsDailymotionComponent } from '../pls-dailymotion/pls-dailymotion.component';

@Component({
  selector: 'app-pls-multiple',
  standalone: true,
  imports: [PlsDailymotionComponent],
  templateUrl: './pls-multiple.component.html',
  styleUrl: './pls-multiple.component.css'
})
export class PlsMultipleComponent {
  @Input() player1 = '';
  @Input() player2 = '';
  @Input() video1 = '';
}
