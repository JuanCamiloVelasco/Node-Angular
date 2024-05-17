import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { LatLng, LatLngExpression, LatLngTuple, LeafletMouseEvent, Map, Marker, icon, latLng, map, marker, tileLayer } from 'leaflet';
import { LocationService } from '../../../services/location.service';
import { Order } from '../../../shared/models/Order';
import { NgIf } from '@angular/common';

@Component({
  selector: 'map',
  standalone: true,
  imports: [NgIf],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnChanges{

  @Input()
  order!:Order
  @Input()
  readonly = false;

  private readonly MARKER_ZOOM_LEVEL = 16;
  private readonly MARKER_ICON = icon({
    iconUrl:
      'https://res.cloudinary.com/foodmine/image/upload/v1638842791/map/marker_kbua9q.png',
    iconSize: [42, 42],
    iconAnchor: [21, 42],
  });

  private readonly DEFAULT_LATLNG: LatLngTuple = [ 13.75, 21.62 ]

  @ViewChild('map', {static:true})
  mapRef!: ElementRef;
  map!:Map;
  currentMarker!:Marker;

  constructor(private locationService:LocationService) {}

  ngOnChanges(): void {
    if(!this.order) return;
    this.initializeMap();

    if(this.readonly && this.direccionLatLng){
      this.showLocationOnReadonlyMode();
    }
  }

  showLocationOnReadonlyMode() {
    const m = this.map;
    this.setMarker(this.direccionLatLng);
    m.setView(this.direccionLatLng, this.MARKER_ZOOM_LEVEL);

    m.dragging.disable();
    m.touchZoom.disable();
    m.doubleClickZoom.disable();
    m.scrollWheelZoom.disable();
    m.boxZoom.disable();
    m.keyboard.disable();
    m.off('click');
    m.tap?.disable();
    this.currentMarker.dragging?.disable();
  }

  initializeMap(){
    if(this.map) return;
    // el segundo map es el segundo map de leaflet que se ve con cntrl + espacio
    this.map = map(this.mapRef.nativeElement, {
      attributionControl: false
    }).setView(this.DEFAULT_LATLNG, 1);

    tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.map);

    this.map.on('click', (e:LeafletMouseEvent)=> {
      this.setMarker(e.latlng);
    })
  }

  findMyLocation() {
    this.locationService.getCurrentLocation().subscribe({
      next: (latLng) => {
        this.map.setView(latLng, this.MARKER_ZOOM_LEVEL)
        this.setMarker(latLng);
      }
    })
  }

  setMarker(latLng:LatLngExpression){
    this.direccionLatLng = latLng as LatLng;
    if(this.currentMarker){
      this.currentMarker.setLatLng(latLng);
      return;
    }

    this.currentMarker = marker(latLng, {
      draggable: true,
      icon: this.MARKER_ICON
    }).addTo(this.map);

    this.currentMarker.on('dragend', () => {
      this.direccionLatLng = this.currentMarker.getLatLng();
    })
  }

  set direccionLatLng(latLng:LatLng) {

    if(!latLng.lat.toFixed) return;

    latLng.lat = parseFloat(latLng.lat.toFixed(8));
    latLng.lng = parseFloat(latLng.lng.toFixed(8));
    this.order.direccionLatLng = latLng;
    console.log(this.order.direccionLatLng);
  }

  get direccionLatLng(){
    return this.order.direccionLatLng!;
  }
}
