import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { OWMService } from './service/owm.service';

const { Geolocation } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IonicMeteo';
  data =  {};
  temps;
  constructor(private owm: OWMService){}

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Curret', coordinates); 
    
    //this.data = {lat : coordinates.coords.latitude, long: coordinates.coords.longitude}
    const temps = this.owm.getMeteo(coordinates.coords.latitude,coordinates.coords.longitude)   
    this.data = temps
  }

  

  
}
