import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <div class="header">
      <ng-content select="[header]"></ng-content>
    </div>
    <div class="main-content">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .header { background-color:  grey; }
    .main-content { }
  `]
})
export class LayoutComponent { }
