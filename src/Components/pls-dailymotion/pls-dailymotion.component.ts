import { Component, Input, AfterViewInit, OnInit, Inject, Injectable, InjectionToken   } from '@angular/core';
import { DOCUMENT } from '@angular/common';

const WINDOW = new InjectionToken<Window>('Global window object', {
  factory: () => window
});

@Component({
  selector: 'app-pls-dailymotion',
  standalone: true,
  imports: [],
  templateUrl: './pls-dailymotion.component.html',
  styleUrl: './pls-dailymotion.component.css'
})

@Injectable()
export class PlsDailymotionComponent implements AfterViewInit, OnInit{

  @Input() player = '';
  @Input() playlist = '';
  @Input() video = '';

  targetId = '';
  constructor(@Inject(DOCUMENT) private document: Document, @Inject(WINDOW) private window: Window) {
  }

  ngOnInit() {
    this.targetId = 'playerDiv-' + Math.floor(Math.random() * 99);
  }
  ngAfterViewInit() {
    const script = this.document.createElement('script');
    console.log(this.window.dailymotion)

    if (this.window.dailymotion === undefined) {
      script.src = `https://geo.dailymotion.com/libs/player/${this.player}.js`;
      script.async = true;
      this.document.body.appendChild(script);

      this.window.dailymotion = {
        onScriptLoaded: this.createPlayer.bind(this),
      };
    } else {
      this.createPlayer()
    }
  }
  private createPlayer() {
    console.log("createplayer");
    this.window.dailymotion
      .createPlayer(this.targetId, {
        playerid: this.player,
        ...this.video && {video: this.video},
        ...this.playlist && {playlist: this.playlist}
      })
      .then((player: any) => console.log(player))
      .catch((e: any) => console.error(e));
  }
}


declare global {
  interface Window { dailymotion: any; }
}