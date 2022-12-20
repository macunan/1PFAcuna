import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styles: [
  ]
})
export class StudentDialogComponent {
  nombreNameControl = new FormControl('')
  apellidoNameControl = new FormControl('')

  studentForm = new FormGroup({
    nombre: this.nombreNameControl,
    apellido: this.apellidoNameControl,
  })

  constructor(
    private readonly dialogRef: DialogRef,
    @Inject(MAT_DIALOG_DATA) public data: Student | null,
  ) {
    if (data) {
      this.studentForm.patchValue(data)
    }
  }

  close() {
    this.dialogRef.close()
  }
}
