import { Directive, Input } from '@angular/core';
import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core/services/google-maps-api-wrapper';

declare var google: any;

@Directive({
  selector: 'sebm-google-map-directions'
})
export class DirectionsMapDirective {
  @Input() origin;
  @Input() destination;
  @Input() waypoints;

  constructor(private gmapsApi: GoogleMapsAPIWrapper) { }

  ngOnInit() {
    this.gmapsApi.getNativeMap().then(map => {
      var directionsService = new google.maps.DirectionsService;
      var directionsDisplay = new google.maps.DirectionsRenderer;
      directionsDisplay.setMap(map);
      directionsService.route({
        origin: { lat: this.origin.latitude, lng: this.origin.longitude },
        destination: { lat: this.destination.latitude, lng: this.destination.longitude },
        waypoints: this.waypoints,
        optimizeWaypoints: true,
        travelMode: 'DRIVING'
      }, function (response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });

    });
  }
}