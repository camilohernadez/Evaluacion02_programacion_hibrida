import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonList, IonItem, IonLabel, IonButton, IonIcon } from "@ionic/angular/standalone";
import { citas } from 'src/Modelo/Clase Citas';
import { addIcons } from 'ionicons';
import { trainOutline, trashOutline } from 'ionicons/icons';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-app-listade-citas',
  templateUrl: './app-listade-citas.component.html',
  styleUrls: ['./app-listade-citas.component.scss'],
  standalone: true,
  imports: [CommonModule ,IonList, IonItem, IonLabel, IonButton, IonIcon],
})
export class AppListadeCitasComponent  implements OnInit {

  @Input() listaCitas:citas [] = []
  @Output() onEliminarCita = new EventEmitter <number>()
  
  constructor() {
    addIcons({trashOutline,trainOutline});
   }

  ngOnInit() {}
  
  eliminar(id:number ) {
  this.onEliminarCita.emit(id)
  }
  
}
