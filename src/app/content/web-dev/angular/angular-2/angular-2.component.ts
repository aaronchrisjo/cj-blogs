import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-angular-2',
  templateUrl: './angular-2.component.html',
  styleUrl: './angular-2.component.css'
})
export class Angular2Component {
  constructor(private router: Router){}

  goToRoute(route: string) {
    this.router.navigate([route]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });  
    });
  }
}
