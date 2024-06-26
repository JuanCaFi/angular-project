import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';
import { RouterModule, RouterOutlet } from '@angular/router';

import { languages, notifications, userItems } from './header-dummy-data';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, OverlayModule, CdkMenuModule, RouterModule, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  canShowSearchAsOverlay = false;
  selectedLanguage: any;

  languages = languages;
  notifications = notifications;
  userItems = userItems;

  tickerWidth: string = '100'; 
  messages: string[] = [
    'Aqui puede ir una noticia con respecto al Sindicato',
    'Aqui puede ir otra noticia, quizá con respecto a algún día feriado',
    'Aqui podría ir una noticia más de algo relevante con respecto a algún curso o noticia de menor importancia'
  ];

  @HostListener('window:resize', ['$event'])
  onResize(_event: any) {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
  }

  ngOnInit(): void {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
    this.selectedLanguage = this.languages[0];
  }


  getHeadClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-trimmed';
    } else {
      styleClass = 'head-md-screen';
    }
    return styleClass;
  }

  gettrickerClass(): string {
    let styleClass = '';
    if(this.screenWidth > 768) {
      styleClass = 'ticker-trimmed';
    } else {
      styleClass = 'ticker-md-screen';
    }
    return styleClass;
  }

  checkCanShowSearchAsOverlay(innerWidth: number): void {
    if(innerWidth < 845) {
      this.canShowSearchAsOverlay = true;
    } else {
      this.canShowSearchAsOverlay = false;
    }
  }
}
