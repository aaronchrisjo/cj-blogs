import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-angular-3',
  templateUrl: './angular-3.component.html',
  styleUrl: './angular-3.component.css'
})
export class Angular3Component {
  constructor(private router: Router){}

  goToRoute(route:string){
    this.router.navigate([route])
  }
}
