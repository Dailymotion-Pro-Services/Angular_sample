import { Routes } from '@angular/router';
import {IframeDailymotionComponent} from '../Components/iframe-dailymotion/iframe-dailymotion.component';
import {IframeMultipleComponent} from '../Components/iframe-multiple/iframe-multiple.component';
import {PesDailymotionComponent} from "../Components/pes-dailymotion/pes-dailymotion.component";
import { PesMultipleComponent } from '../Components/pes-multiple/pes-multiple.component';
import { PlsDailymotionComponent } from '../Components/pls-dailymotion/pls-dailymotion.component';

export const routes: Routes = [
    { 
      path: 'iframe-dailymotion-video', 
      component: IframeDailymotionComponent,
      data: {
        src: "https://geo.dailymotion.com/player/x8qeu.html?video=x84sh87&mute=true",
      } 
    },
    { 
      path: 'iframe-dailymotion-playlist', 
      component: IframeDailymotionComponent,
      data: {
        src: "https://geo.dailymotion.com/player/x8qeu.html?playlist=x79dlo&mute=true",
      } 
    },
    { 
      path: 'iframe-dailymotion-playlist-video', 
      component: IframeDailymotionComponent,
      data: {
        src: "https://geo.dailymotion.com/player/x8qeu.html?playlist=x79dlo&video=x84s8c6&mute=true",
      } 
    },
    { 
      path: 'iframe-dailymotion-multiple', 
      component: IframeMultipleComponent,
      data: {
        src1: "https://geo.dailymotion.com/player/x8qeu.html?video=x84sh87&mute=true",
        
        src2: "https://geo.dailymotion.com/player/x8qeu.html?video=x84s8c6&mute=true",
      } 
    },
    { 
      path: 'pes-dailymotion-video', 
      component: PesDailymotionComponent,
      data: {
        player: 'x8qeu',
        video: 'x84sh87'
      } 
    },
    
    { 
      path: 'pes-dailymotion-playlist', 
      component: PesDailymotionComponent,
      data: {
        player: 'x8qeu',
        playlist: 'x79dlo'
      } 
    },
    
    { 
      path: 'pes-dailymotion-playlist-video', 
      component: PesDailymotionComponent,
      data: {
        player: 'x8qeu',
        playlist: 'x79dlo',
        video: 'x84s8c6'
      } 
    },
    
    { 
      path: 'pes-dailymotion-multiple', 
      component: PesMultipleComponent,
      data: {
        player1: 'x8qeu',
        player2: 'x7n9s',
        video1: 'x84sh87'
      } 
    },
    
    { 
      path: 'pls-dailymotion-video', 
      component: PlsDailymotionComponent,
      data: {
        player: 'x8qeu',
        video: 'x84sh87'
      } 
    },
    
    { 
      path: 'pls-dailymotion-playlist', 
      component: PlsDailymotionComponent,
      data: {
        player: 'x8qeu',
        playlist: 'x79dlo'
      } 
    },
    
    { 
      path: 'pls-dailymotion-playlist-video', 
      component: PlsDailymotionComponent,
      data: {
        player: 'x8qeu',
        playlist: 'x79dlo',
        video: 'x84s8c6'
      } 
    },

    
    { 
      path: 'pls-dailymotion-multiple', 
      component: PesMultipleComponent,
      data: {
        player1: 'x8qeu',
        player2: 'x7n9s',
        video1: 'x84sh87'
      } 
    },
];
