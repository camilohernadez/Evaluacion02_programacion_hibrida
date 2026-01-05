import { Component, OnInit } from '@angular/core';
import { Citaservice } from '../Servicio/citaservice';
import { AppCreaciondeCitasComponent } from "../app-creacionde-citas/app-creacionde-citas.component";
import { AppListadeCitasComponent } from "../app-listade-citas/app-listade-citas.component";
import { citas } from 'src/Modelo/Clase Citas';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-app-gestionde-citas',
  templateUrl: './app-gestionde-citas.component.html',
  styleUrls: ['./app-gestionde-citas.component.scss'],
  standalone: true,
  imports: [CommonModule,AppCreaciondeCitasComponent, AppListadeCitasComponent],
})
export class AppGestiondeCitasComponent  implements OnInit {


  listaCitas: citas [] = []
  

  constructor(private citaservice:Citaservice) {}

 
  async ngOnInit() {
    await this.citaservice.iniciarPlugin();
    await this.cargarCitas();
  }

  async cargarCitas() {
    this.listaCitas = await this.citaservice.getCitas();
  }
  
  async onEliminarCita(id: number) {
  await this.citaservice.eliminarCitas(id)
  await this.cargarCitas()
  }
  
    async onAgregarCita($event: citas) {
    await this.citaservice.agregarCitas($event);
    await this.cargarCitas();
  }
}
