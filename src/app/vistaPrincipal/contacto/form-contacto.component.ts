import { Component, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-contacto',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-contacto.component.html',
  styleUrl: './form-contacto.component.css'
})
export class FormContactoComponent {
  contactForm: FormGroup;
  submitted = false;
  messageSent = false;

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      correo: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.valid) {
      // Simular envío del formulario
      console.log('Formulario enviado:', this.contactForm.value);
      
      // Mostrar confirmación inmediatamente
      this.messageSent = true;
      this.cdr.detectChanges();
      
      // Scroll al inicio para ver el mensaje de confirmación
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
      
      // Resetear formulario después de 5 segundos
      setTimeout(() => {
        this.contactForm.reset();
        this.submitted = false;
        this.messageSent = false;
        this.cdr.detectChanges();
      }, 5000);
    } else {
      // Si el formulario no es válido, hacer scroll a los errores
      setTimeout(() => {
        const firstError = document.querySelector('.is-invalid');
        if (firstError) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }
}
