import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {

  isVisible = false;
  message = '';  
  duration = 3000;


  showToast(message: string, duration?: number) {
    this.message = message;
    this.isVisible = true;
    if (duration) {
      this.duration = duration;
    }

    setTimeout(() => {
      this.isVisible = false;
    }, this.duration);
  }

  get toastClass() {
    return this.isVisible ? 'show' : 'hide';
  }
}
