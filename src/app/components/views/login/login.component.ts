import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { DialogDataComponent } from '../../shared/dialog-data/dialog-data.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(
    private authService: AuthService,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.cdr.markForCheck();
  }
  onLogin() {
    if (!this.loginForm.invalid) {
      this.authService.login(
        this.loginForm.get('user')?.value,
        this.loginForm.get('password')?.value
      );
      const user = this.authService.getCurrentUser();
    } else {
      this.dialog.open(DialogDataComponent);
    }
  }
}
