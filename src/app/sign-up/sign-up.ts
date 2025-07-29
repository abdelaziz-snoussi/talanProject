import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './sign-up.html',
  styleUrls: ['./sign-up.scss']
})
export class SignUp {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  
  signUpForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', Validators.required]
  }, { validators: this.passwordMatchValidator });

  showSuccess = false;
  isLoading = false;

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null
      : { mismatch: true };
  }

  async onSubmit() {
    if (this.signUpForm.invalid) return;

    this.isLoading = true;
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      this.showSuccess = true;
      setTimeout(() => this.router.navigate(['/signin']), 2000);
    } finally {
      this.isLoading = false;
    }
  }
}