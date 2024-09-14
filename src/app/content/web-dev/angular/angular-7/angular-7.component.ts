import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-angular-7',
  templateUrl: './angular-7.component.html',
  styleUrl: './angular-7.component.css'
})
export class Angular7Component {
  constructor(private router: Router){}

  goToRoute(route: string) {
    this.router.navigate([route]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });  
    });
  }
}
