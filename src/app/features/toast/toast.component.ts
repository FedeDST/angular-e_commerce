import { Component, Input } from '@angular/core';
import { Toast } from '../../core/models/toast.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-toast',
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  @Input() toastObj:Toast = {message:'',status:null,visible:false};
}
