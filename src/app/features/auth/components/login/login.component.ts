import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Auth } from '../../../../core/interfaces/auth.interface';
import { Store } from '@ngrx/store';
import { login } from '../../store/auth.actions';
import { ToastComponent } from '../../../../shared/components/toast/toast.component';
import { ToastService } from '../../../../shared/services/toast.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule, 
    ReactiveFormsModule,
    ToastComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  @ViewChild('toast') toast!: ToastComponent;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private toastService: ToastService
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngAfterViewInit() {
    this.toastService.setToastComponent(this.toast);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginData : Auth = this.loginForm.value;
      this.store.dispatch(login(loginData));
    }
  }
}
