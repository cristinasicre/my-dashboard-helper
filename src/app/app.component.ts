import { Component, OnInit } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogDataComponent } from './components/shared/dialog-data/dialog-data.component';
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
    private activeRoute: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().then((user) => {
      user.onAuthStateChanged((response) => {
        if (user.currentUser) {
          this.router.navigate(['dashboard']);
        } else {
          this.router.navigate(['login']);
        }
      });
    });
  }
}
