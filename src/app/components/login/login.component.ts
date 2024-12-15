import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      this.authService.login({ username, password }).subscribe(
        (res: any) => {
          const data = res?.newUserObj;
          // Save the token to localStorage (or a more secure storage method)
          localStorage.setItem('accessToken', data.accessToken);
          localStorage.setItem('user', JSON.stringify(data));
          this.router.navigate(['/dashboard']); // Redirect to dashboard or another page
        },
        (error) => {
          this.errorMessage = error.error.message || 'Invalid credentials';
        }
      );
    }
  }
}