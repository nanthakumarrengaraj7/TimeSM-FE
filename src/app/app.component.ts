import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontent';
  showLayout: boolean = true;

  constructor( private router: Router){
    this.router.events.subscribe(() => {
      const excludedRoutes = ['/login'];
      this.showLayout = !excludedRoutes.includes(this.router.url);
    });
  }

  logout(){
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
