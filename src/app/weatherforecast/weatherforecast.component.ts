import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weatherforecast',
  templateUrl: './weatherforecast.component.html',
  styleUrls: ['./weatherforecast.component.css']
})
export class WeatherforecastComponent implements OnInit {

  weatherF:any;
  users:any;

  constructor(private http:HttpClient) {

  }

  ngOnInit(): void {
    this.getWeatherForecasts();
    this.getUsers();
  }  

  getWeatherForecasts()
  {
    this.http.get("https://localhost:44324/api/weatherforecast").subscribe(response=>{
      this.weatherF=response
      console.log(this.weatherF);
    },error => {
      console.log('Error occurred',error);
    });
  }

  getUsers()
  {
    this.http.get("https://localhost:44324/api/users").subscribe(response => {
      this.users=response;
    },error => {
      console.log("Error occurred while getting users: ",error);
    });
  }
}
