import { Component, OnInit } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const user = this.authService.getCurrentUser();
    user.onAuthStateChanged((response) => {
      if (user.currentUser) {
        console.log('User', user);
        this.router.navigate(['dashboard']);
      } else {
        this.router.navigate(['login']);
        console.log('No hay usuario autenticado');
      }
    });
    
  }
}
