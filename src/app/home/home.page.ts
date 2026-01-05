import { Component, OnInit } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, 
  IonIcon, IonCard, IonCardContent,
  AlertController, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { settingsOutline, add, trash } from 'ionicons/icons';
import { RouterModule } from '@angular/router';
import { citas } from 'src/Modelo/Clase Citas';
import { CommonModule } from '@angular/common';
import { Citaservice } from '../Servicio/citaservice';
import { Configuracionservice } from '../Servicio/configuracion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonFabButton, IonFab, 
    CommonModule, IonCardContent, IonCard, RouterModule
    , IonIcon, IonButton, IonButtons, IonHeader, IonToolbar, 
    IonTitle, IonContent
  ],
})
export class HomePage implements OnInit {
    
  citaActual: citas | null = null;
  permitirEliminar: boolean = false;

  constructor(
    private citaservice: Citaservice,
    private configuracionService: Configuracionservice,  
    private alertController: AlertController,
    private router: Router
  ) {
    addIcons({settingsOutline, add, trash});
  }

  async ngOnInit() {
    await this.citaservice.iniciarPlugin();
    await this.cargarConfiguracion();
    await this.getCitasAleatorias();
  }
  

  async ionViewWillEnter() {
    await this.cargarConfiguracion();
  }

  async cargarConfiguracion() {
    this.permitirEliminar = await this.configuracionService.getAllowDeleteInHome();
  }

  async getCitasAleatorias() {
    this.citaActual = await this.citaservice.getCitasAleatorias();
  }
   
  irAGestion() {
  this.router.navigate(['/gestionde-citas']); 
  }

  async eliminarCitaActual() {
    if (!this.citaActual?.id) return;

    const alert = await this.alertController.create({ 
      header: 'Confirmar eliminación',
      message: '¿Está seguro de que desea eliminar esta cita?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          handler: async () => {
            await this.citaservice.eliminarCitas(this.citaActual!.id!);
            await this.getCitasAleatorias();
          }
        }
      ]
    });
    
    await alert.present();
  }
}