import { Component, Input } from '@angular/core';
import { PesDailymotionComponent } from '../pes-dailymotion/pes-dailymotion.component';

@Component({
  selector: 'app-pes-multiple',
  standalone: true,
  imports: [PesDailymotionComponent],
  templateUrl: './pes-multiple.component.html',
  styleUrl: './pes-multiple.component.css'
})
export class PesMultipleComponent {
  @Input() player1 = '';
  @Input() player2 = '';
  @Input() video1 = '';
}
