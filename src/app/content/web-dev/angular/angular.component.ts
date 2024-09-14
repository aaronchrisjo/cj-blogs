import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.css'
})
export class AngularComponent {
  constructor(private router: Router) {
    // Listen for navigation events to handle fragment scrolling
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Get the current fragment from the URL
      const fragment = this.router.url.split('#')[1];
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  goToRoute(route: string, fragment?: string) {
    this.router.navigate([route], { fragment: fragment });
  }
  goToRoute1(route: string) {
    this.router.navigate([route]).then(()=>{
      window.scrollTo({top:0, behavior:'smooth'})
    });
  }

  goToSection(route: string, sectionId: string) {
    this.goToRoute(route, sectionId);
  }

  goToSection1(id: string) {
    this.router.navigate([], { fragment: id });
  }
}
