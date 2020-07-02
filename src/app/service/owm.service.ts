import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OWMService {
  appId ="9bf7433f52a2c6519df58c3ad150d67e";
  constructor(private http: HttpClient) { }

  async getMeteo(lat, long){
    console.log(this.appId);    
    return await this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${this.appId}&units=metric`).pipe(first()).toPromise();
  }
}
