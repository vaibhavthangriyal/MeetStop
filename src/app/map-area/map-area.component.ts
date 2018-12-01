import { Component, OnInit } from '@angular/core';
import { MapsService } from '../shared/maps.service';

@Component({
  selector: 'app-map-area',
  templateUrl: './map-area.component.html',
  styleUrls: ['./map-area.component.css']
})
export class MapAreaComponent implements OnInit {
  homeLat:number;
  homeLong:number;

  constructor(private mapsService:MapsService) {
  }

  ngOnInit() {
    this.homeLat = this.mapsService.currLat;
    this.homeLong = this.mapsService.currLong;
  }

}