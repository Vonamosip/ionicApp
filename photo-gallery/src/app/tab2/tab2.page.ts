import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { PhotoService } from '../services/photo.service';
import { IonCol, IonGrid, IonRow } from '@ionic/angular/standalone';
import { IonImg } from '@ionic/angular/standalone';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonCol, IonGrid, IonRow,IonImg]
})
export class Tab2Page {

  constructor(public readonly photoService:PhotoService) {}

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
