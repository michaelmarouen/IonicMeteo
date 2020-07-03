import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { OWMService } from './service/owm.service';

const { Geolocation } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'IonicMeteo';
  data =  {};
  icon : string;
  temperature : number ;
  location : string;
  min: number ;
  max: number ;
  presure: number ;
  humidity: number;
  dateduJour;

  constructor(private owm: OWMService){}
  

  async ngOnInit() {
    const coordinates = await this.getCurrentPosition();
    const meteo = await this.getMeteo(coordinates);
  }
  async getCurrentPosition() {
     return await Geolocation.getCurrentPosition();    
  }

  async getMeteo(coordinates){
    const temps :any = await this.owm.getMeteo(coordinates.coords.latitude,coordinates.coords.longitude);   
    const tempsWeek :any = await this.owm.getMeteoWeek(coordinates.coords.latitude,coordinates.coords.longitude);       
    console.log(tempsWeek);
    
    this.data = temps;
    
    this.icon = await `http://openweathermap.org/img/wn/${temps.weather[0].icon}@2x.png`
    const theDate= new Date();
    this.dateduJour = theDate.getDate()+"/"+theDate.getMonth()+"/"+theDate.getFullYear()
    this.temperature = temps.main.temp;
    this.location = temps.name;
    this.min = temps.main.temp_min;
    this.max = temps.main.temp_max;
    this.presure = temps.main.pressure;
    this.humidity = temps.main.humidity;

  }  
  async getMeteoWeek(coordinates){    
    const tempsWeek :any = await this.owm.getMeteoWeek(coordinates.coords.latitude,coordinates.coords.longitude);       
    console.log(tempsWeek);
    this.data = tempsWeek;
    
    this.icon = await `http://openweathermap.org/img/wn/${tempsWeek.weather[0].icon}@2x.png`
    const theDate= new Date();
    this.dateduJour = theDate.getDate()+"/"+theDate.getMonth()+"/"+theDate.getFullYear()
    this.temperature = tempsWeek.main.temp;
    this.location = tempsWeek.name;
    this.min = tempsWeek.main.temp_min;
    this.max = tempsWeek.main.temp_max;
    this.presure = tempsWeek.main.pressure;
    this.humidity = tempsWeek.main.humidity;

  }  

  
}

