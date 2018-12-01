import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AutoCompleteService } from '../shared/auto-complete.service';
import { MapsService } from '../shared/maps.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  dest:string;

  @ViewChild('destination')public destination:ElementRef;

  constructor(private autoComplete:AutoCompleteService,
              private mapsService:MapsService) { }

  ngOnInit() {
    this.autoComplete.autoSuggest(this.destination);
    
  }

  
}
