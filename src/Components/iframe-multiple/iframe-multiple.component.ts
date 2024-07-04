import { Component, Input } from '@angular/core';
import { IframeDailymotionComponent } from '../iframe-dailymotion/iframe-dailymotion.component';

@Component({
  selector: 'app-iframe-multiple',
  standalone: true,
  imports: [IframeDailymotionComponent],
  templateUrl: './iframe-multiple.component.html',
  styleUrl: './iframe-multiple.component.css'
})
export class IframeMultipleComponent {
  @Input() src1 = '';
  @Input() src2 = '';
}
