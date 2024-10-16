import { Injectable } from '@angular/core';
import { ToastComponent } from '../components/toast/toast.component';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastComponent!: ToastComponent;

  // Método para inyectar el componente Toast en el servicio
  setToastComponent(toast: ToastComponent) {
    this.toastComponent = toast;
  }

  // Método para mostrar el toast
  showToast(message: string, duration: number = 3000) {
    if (this.toastComponent) {
      this.toastComponent.showToast(message, duration);
    } else {
      console.error('ToastComponent no está inicializado');
    }
  }
}
