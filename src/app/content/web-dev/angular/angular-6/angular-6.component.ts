import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-angular-6',
  templateUrl: './angular-6.component.html',
  styleUrl: './angular-6.component.css'
})
export class Angular6Component {
  constructor(private router: Router){}

  goToRoute(route: string) {
    this.router.navigate([route]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });  
    });
  }
}
