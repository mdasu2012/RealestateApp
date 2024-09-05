import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { GoogleMap } from '@capacitor/google-maps';

@Component({
  selector: 'app-mark-attendence',
  templateUrl: './mark-attendence.page.html',
  styleUrls: ['./mark-attendence.page.scss'],
})
export class MarkAttendencePage implements OnInit, AfterViewInit {
  map1!: google.maps.Map;

  map!: GoogleMap;
  constructor() { }

  async ngOnInit() {
    //this.createMap();
    await this.createMap();
    await this.locateUser();
  }

  ngAfterViewInit() {
  //  this.loadMap();
  }

  // loadMap() {
  //   const mapOptions: google.maps.MapOptions = {
  //     center: { lat: -34.397, lng: 150.644 },
  //     zoom: 8,
  //   };

  //   this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, mapOptions);
  // }

  // async createMap() {
  //   this.map1 = await GoogleMap.create({
  //     id: 'my-map', // Arbitrary ID for the map instance
  //     element: document.getElementById('map1') as HTMLElement,
  //     apiKey: 'AIzaSyB8_FE-DEpI9AJY1C3-sVqi-cYFOseRhCY',
  //     config: {
  //       center: {
  //         lat: 37.7749,
  //         lng: -122.4194,
  //       },
  //       zoom: 12,
  //     },
  //   });
  // }


  async createMap() {
    this.map = await GoogleMap.create({
      id: 'my-map',
      element: document.getElementById('map') as HTMLElement,
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
      config: {
        center: {
          lat: 37.7749,
          lng: -122.4194,
        },
        zoom: 12,
      },
    });
  }

  // Method to locate the user and set the map camera
  async locateUser() {
    try {
      const position = await Geolocation.getCurrentPosition(); // Get user location
      const coordinates = position.coords;

      // Update the map's camera position
      await this.map.setCamera({
        coordinate: {
          lat: coordinates.latitude,
          lng: coordinates.longitude,
        },
        zoom: 15,
      });

      // Optionally, add a marker at the user's location
      await this.map.addMarkers([
        {
          coordinate: {
            lat: coordinates.latitude,
            lng: coordinates.longitude,
          },
          title: "Your Location",
        },
      ]);
    } catch (error) {
      console.error('Error getting location', error);
    }
  }
  

}
