import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe-dailymotion',
  standalone: true,
  imports: [],
  templateUrl: './iframe-dailymotion.component.html',
  styleUrl: './iframe-dailymotion.component.css'
})
export class IframeDailymotionComponent {
  @Input() src = '';
  srcSafe: SafeResourceUrl = '';

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.srcSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.src);
  }
}
