import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web-dev',
  templateUrl: './web-dev.component.html',
  styleUrl: './web-dev.component.css'
})
export class WebDevComponent {
  constructor(private router: Router){}

  goToRoute(route:string){
    this.router.navigate([route])
  }
}
