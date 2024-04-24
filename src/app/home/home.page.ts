import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons } from '@ionic/angular/standalone';
import { Geolocation } from '@capacitor/geolocation';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons],
})
export class HomePage {
  coordinates:any = "";
  latitude:number = 0;
  longitude:number = 0;
  url:string = "";
  constructor() {}

  async getGPS()
  {
    this.coordinates = await Geolocation.getCurrentPosition();
    this.longitude = this.coordinates.coords.longitude;
    this.latitude = this.coordinates.coords.latitude;
  }

  async openBrowser()
  {
    await Browser.open({url: 'http://capacitorjs.com/'});
  }
}
