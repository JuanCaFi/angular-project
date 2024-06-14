import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from "./pages/layout/layout.component";
import { CustomAdminSidenavComponent } from "./components/sidenav/custom-admin-sidenav.component";
import { HeaderComponent } from "./components/header/header.component";



interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, LayoutComponent, CustomAdminSidenavComponent, HeaderComponent]
})
export class AppComponent {
  title = 'SEP';

  isSideNavCollapsed = false;
  screenWidth = 0;
  
  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
