import { Component, OnInit } from
 
'@angular/core';
import { GeolocationService } from
 
'./geolocation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export
 
class
 
AppComponent
 
implements
 
OnInit {
  location: any;

  constructor(private geolocationService: GeolocationService) {}

  ngOnInit() {
    this.geolocationService.getLocation().subscribe(location => {
      this.location = {
        latitude: location.latitude,
        longitude: location.longitude
      };
    });
  }
}
