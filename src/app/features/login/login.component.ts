import { Component, inject} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Message } from '../../core/models/message.model';
import { MessagesComponent } from "../messages/messages.component";

@Component({
  selector: 'app-login-modal',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule, CommonModule, MessagesComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

constructor(private fb:FormBuilder,private auth:AuthService){}
private route = inject(Router);
message:Message = {message:'',type:'E'};

loginForm = this.fb.group({
  email: ['',[Validators.required, Validators.email]],
  password: ['',[Validators.required, Validators.minLength(6)]]
})
sendLogin(){
  this.auth.login(this.loginForm.value.email!, this.loginForm.value.password!).subscribe({
    next: (res) => {
      this.message.message = "Credenziali valide,verrai mandato alla pagina dei prodotti a breve."
      this.message.type = 'S';
      setTimeout(()=>{
      this.route.navigate(['/']);
      },3000)
    },
    error: (err) => {
      this.message.message="Credenziali non valide,verifica email e password.";
      this.message.type = "E";
    }
  });
}
}
