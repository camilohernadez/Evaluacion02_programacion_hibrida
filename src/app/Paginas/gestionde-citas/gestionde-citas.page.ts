import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { AppGestiondeCitasComponent } from "src/app/app-gestionde-citas/app-gestionde-citas.component";

@Component({
  selector: 'app-gestionde-citas',
  templateUrl: './gestionde-citas.page.html',
  styleUrls: ['./gestionde-citas.page.scss'],
  standalone: true,
  imports: [IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    AppGestiondeCitasComponent]
})
export class GestiondeCitasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
