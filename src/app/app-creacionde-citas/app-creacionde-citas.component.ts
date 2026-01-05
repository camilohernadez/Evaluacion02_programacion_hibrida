import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonInput, IonLabel, IonButton, IonIcon, IonText } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { citas } from 'src/Modelo/Clase Citas';

@Component({
  selector: 'app-app-creacionde-citas',
  templateUrl: './app-creacionde-citas.component.html',
  styleUrls: ['./app-creacionde-citas.component.scss'],
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,IonText, IonIcon, IonButton, IonLabel, IonInput, IonItem, IonCardTitle, IonCardHeader, IonCard, IonCardContent],
})
export class AppCreaciondeCitasComponent  implements OnInit {
  
  creacioncita: FormGroup;
  
  @Output() onAgregarCita = new EventEmitter<citas>();

  constructor(private fb: FormBuilder) {
    
    addIcons({ add });
    
    this.creacioncita = this.fb.group({
      frase: ['', [Validators.required, Validators.minLength(5)]],
      autor: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  ngOnInit() {}

  agregarCita() {
    if (this.creacioncita.valid) {
      const nuevaCita: citas = {
        Frase: this.creacioncita.value.frase,
        Autor: this.creacioncita.value.autor
      };

      this.onAgregarCita.emit(nuevaCita);
      this.creacioncita.reset();
    }
  }
  get frase() {
    return this.creacioncita.get('frase');
  }
  get autor() {
    return this.creacioncita.get('autor');
  }
}

