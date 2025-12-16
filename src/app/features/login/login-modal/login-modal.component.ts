import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login-modal',
  imports: [ɵInternalFormsSharedModule,ReactiveFormsModule],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.css'
})
export class LoginModalComponent {
@Input() isOpen: boolean = false;
@Output() closeModal = new EventEmitter<void>();

close() {
  this.isOpen = false;
  this.closeModal.emit();
}
constructor(private fb:FormBuilder,private auth:AuthService){}

loginForm = this.fb.group({
  email: ['',[Validators.required, Validators.email]],
  password: ['',[Validators.required, Validators.minLength(6)]]
})
sendLogin(){
  this.auth.login(this.loginForm.value.email!, this.loginForm.value.password!).subscribe({
    next: (res) => {
      console.log('Login successful', res);
      this.close();
    },
    error: (err) => {
      console.error('Login failed', err);
      alert('Login failed: ' + err.message);
    }
  });
}
}
