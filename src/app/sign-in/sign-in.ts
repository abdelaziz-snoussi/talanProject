import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './sign-in.html',
  styleUrls: ['./sign-in.scss']
})
export class SignIn {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  
  signInForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  showSuccess = false;
  isLoading = false;

  async onSubmit() {
    if (this.signInForm.invalid) return;

    this.isLoading = true;
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      this.showSuccess = true;
      setTimeout(() => this.router.navigate(['/addplat']), 2000);
    } finally {
      this.isLoading = false;
    }
  }
}