import { Component, inject} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-modal',
  imports: [ɵInternalFormsSharedModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

constructor(private fb:FormBuilder,private auth:AuthService){}
private route = inject(Router);

loginForm = this.fb.group({
  email: ['',[Validators.required, Validators.email]],
  password: ['',[Validators.required, Validators.minLength(6)]]
})
sendLogin(){
  this.auth.login(this.loginForm.value.email!, this.loginForm.value.password!).subscribe({
    next: (res) => {
      console.log('Login successful', res);
      this.route.navigate(['/']);
    },
    error: (err) => {
      console.error('Login failed', err);
      alert('Login failed: ' + err.message);
    }
  });
}
}
