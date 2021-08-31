import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    
  }

  onLogin() {
    this.authService.login(
      this.loginForm.get('user')?.value,
      this.loginForm.get('password')?.value
    );

    const user = this.authService.getCurrentUser();
    
    console.log(user);
  }
}
