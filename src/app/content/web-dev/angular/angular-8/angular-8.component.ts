import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-angular-8',
  templateUrl: './angular-8.component.html',
  styleUrl: './angular-8.component.css'
})
export class Angular8Component {
  constructor(private router: Router){}

  goToRoute(route: string) {
    this.router.navigate([route]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });  
    });
  }
}
