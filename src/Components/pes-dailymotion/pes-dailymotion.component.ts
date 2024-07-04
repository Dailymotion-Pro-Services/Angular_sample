import { Component, AfterViewInit, OnInit, Input, Inject, Injectable, ViewChild, ElementRef  } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-pes-dailymotion',
  standalone: true,
  imports: [],
  templateUrl: './pes-dailymotion.component.html',
  styleUrl: './pes-dailymotion.component.css'
})

@Injectable()
export class PesDailymotionComponent implements AfterViewInit, OnInit {
  @Input() player = '';
  @Input() playlist = '';
  @Input() video = '';

  @ViewChild('container') container: ElementRef;

  targetId = '';
  constructor(@Inject(DOCUMENT) private document: Document) {}


  ngOnInit() {
    // console.log("ngOnInit");
  }
  ngAfterViewInit() {
    const script = this.document.createElement('script');
    script.src = `https://geo.dailymotion.com/player/${this.player}.js`;
    script.async = true;
    if(this.playlist){
      script.setAttribute('data-playlist', this.playlist);
    }
    if(this.video){
      script.setAttribute("data-video",this.video);
    }
    // console.log("ngAfterViewInit");
    
    this.container.nativeElement.appendChild(script);
  }
}
