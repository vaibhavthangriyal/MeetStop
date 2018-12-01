import { Injectable } from '@angular/core';
import { AutoCompleteService } from './auto-complete.service';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  currLat:number;
  currLong:number;
  desLat:number;
  desLong:number;
  desName:string;
  currlocation;
  desLocation;

  constructor(private autoService:AutoCompleteService) { 
    this.onFindLocation();
    this.getDestLocation();
  }

  onFindLocation(){
    this.resetLocation();
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    navigator.geolocation.getCurrentPosition(position => {
      this.currLat = position.coords.latitude;
      this.currLong = position.coords.longitude;
      //this.currlocation = new google.maps.LatLng(this.currLat,this.currLong);

    },error,options);
  }
  resetLocation(){
    this.currLat = 0;
    this.currLong = 0;
  }
  onMapClick(event){
    this.desLat = event.coords.lat;
    this.desLong = event.coords.lng;
  }
  getDestLocation(){
    this.autoService.subject.subscribe((place) => {
      this.desLat = place.f.f;
      this.desLong = place.b.b;
      this.desLocation = new google.maps.LatLng(this.desLat, this.desLong);
    })
  }

  // calculateDistanceAndRoter(){
  //   this.directionService.route({
  //     origin: this.currlocation,
  //     destination: this.desLocation,
  //   },(response,status)=>{

  //   }
  //   )
  // }

}


