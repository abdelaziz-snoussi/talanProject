import { Component,inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import{
  FormBuilder,Validators,
  ReactiveFormsModule,
  AbstractControl
} from '@angular/forms';
@Component({
  standalone:true,
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss'
})
export class SignIn {
   private fb=inject(FormBuilder);
   signInForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required]
   });
   showSuccess = false; 

  onSubmit() {
    if (this.signInForm.valid) {
      console.log('Form submitted', this.signInForm.value);
      this.showSuccess = true; 
      setTimeout(() => this.showSuccess = false, 3000);
    }
  }
}
