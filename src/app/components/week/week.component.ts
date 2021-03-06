import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { OWMService } from 'src/app/service/owm.service';

const { Geolocation } = Plugins;


@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent implements OnInit {
  title = 'IonicMeteo';
  data;
  icon : string;
  temperature : number ;
  location : string;
  min: number ;
  max: number ;
  presure: number ;
  humidity: number;
  dateduJour;
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(private owm: OWMService){}
  

  async ngOnInit() {
    const coordinates = await this.getCurrentPosition();
    await this.getMeteoWeek(coordinates);
  }
  async getCurrentPosition() {
     return await Geolocation.getCurrentPosition();    
  }

  async getMeteoWeek(coordinates){    
    const tempsWeek :any = await this.owm.getMeteoWeek(coordinates.coords.latitude,coordinates.coords.longitude);       
    console.log(tempsWeek);    
    const [...data] =tempsWeek.daily;
    this.data = data;
    console.log(this.data);    
    //this.icon = await `http://openweathermap.org/img/wn/${tempsWeek.weather[0].icon}@2x.png`
    this.icon ='';
    const theDate= new Date();
    this.dateduJour = theDate.getDate()+"/"+theDate.getMonth()+"/"+theDate.getFullYear()
 

  }  
}
