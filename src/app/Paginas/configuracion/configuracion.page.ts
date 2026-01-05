import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton
  , IonList, IonItem, IonLabel, IonToggle, IonBackButton } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';
import { Configuracionservice } from 'src/app/Servicio/configuracion';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [IonBackButton, 
    CommonModule,
    FormsModule,      
    RouterModule,
    IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonList, IonItem, IonLabel, IonToggle
  ]
})
export class ConfiguracionPage implements OnInit {

  permitirEliminar: boolean = false;

  constructor(private settingsService: Configuracionservice) {
    addIcons({ arrowBack });
  }

  async ngOnInit() {
    await this.cargarConfiguracion();
  }

  
  async cargarConfiguracion() {
    this.permitirEliminar = await this.settingsService.getAllowDeleteInHome();
  }

  async guardarConfiguracion() {
    await this.settingsService.setAllowDeleteInHome(this.permitirEliminar);
  }
}