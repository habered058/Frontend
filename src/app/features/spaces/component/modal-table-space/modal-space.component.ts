import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Space } from '../../../../core/interfaces/space.interface';

@Component({
  selector: 'app-modal-space',
  standalone: true,
  templateUrl: './modal-space.component.html',
  styleUrls: ['./modal-space.component.scss'],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ]
})
export class ModalSpaceComponent {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ModalSpaceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Space,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      id: [data.id, Validators.required],
      name: [data.name, Validators.required],
      description: [data.name, Validators.required],
      capacity: [data.name, Validators.required]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }
}
