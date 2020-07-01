import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IonicMeteo';
  data =  {};
  
  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Curret', coordinates);
    this.data = {lat : coordinates.coords.latitude, long: coordinates.coords.longitude}
  }

}
