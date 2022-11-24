import { Component ,AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit{


  constructor() { }

  ngAfterViewInit(): void {
    this.mapInitializer();
  }

    lat = 30.681272527163138;
    lng = 76.72595947980881;                   



    title = 'gmaps';
  
  @ViewChild('mapContainer', { static: false }) gmap?: ElementRef;

  map?: google.maps.Map;
  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8,
  };

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap?.nativeElement, 
    this.mapOptions);
    this.marker.setMap(this.map);
   }

   marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });

   }
