/// <reference types="@types/googlemaps" />

import { Injectable, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoCompleteService {

  subject = new Subject<any>();
  constructor(private mapAPILoader:MapsAPILoader,
              private ngZone:NgZone) {}

  autoSuggest(destination){
    this.mapAPILoader.load().then(()=>{
        let autoComplete = new google.maps.places.Autocomplete(destination.nativeElement,{types:["address"]});
        autoComplete.addListener("place_changed",()=>{
          this.ngZone.run(()=>{
            var place:google.maps.places.PlaceResult = autoComplete.getPlace();
            this.subject.next(place.geometry.viewport);
            if(place.geometry === undefined || place.geometry === null){
              return
            }        
          })
        })
      }
    )
  }
}
