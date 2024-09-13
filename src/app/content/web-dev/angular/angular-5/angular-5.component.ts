import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-angular-5',
  templateUrl: './angular-5.component.html',
  styleUrl: './angular-5.component.css'
})
export class Angular5Component {
  constructor(private router: Router){}

  goToRoute(route: string) {
    this.router.navigate([route]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });  
    });
  }
}
