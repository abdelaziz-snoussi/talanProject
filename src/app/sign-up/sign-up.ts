import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { 
  FormBuilder, 
  Validators, 
  ReactiveFormsModule, 
  FormGroup, 
  AbstractControl 
} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss'
})
export class SignUp {
  private fb = inject(FormBuilder);  
  signUpForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [
      Validators.required, 
      Validators.email
    ]],
    phone: [''],
    password: ['', [
      Validators.required, 
      Validators.minLength(8)
    ]],
    confirmPassword: ['', Validators.required]
  }, { 
    validators: this.passwordMatchValidator.bind(this) 
  });

  passwordMatchValidator(control: AbstractControl) {
    const formGroup = control as FormGroup;
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    
    return password === confirmPassword ? null : { mismatch: true };
  }

  showSuccess = false; 

  onSubmit() {
    if (this.signUpForm.valid) {
      console.log('Form submitted', this.signUpForm.value);
      this.showSuccess = true;
      setTimeout(() => this.showSuccess = false, 3000);
    }
  }
}