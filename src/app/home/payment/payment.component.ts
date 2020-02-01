import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';  

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  
})
export class PaymentComponent implements OnInit {

  captch
  captchValue=""
  showError
  username
  private selectedLink: string=" ";  
  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom:number;
  address: string;
  private geoCoder;
 
  @ViewChild('search', {static: false})
  public searchElementRef: ElementRef;

 
  

  constructor( private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }
        
  alpahabate=["a","B","Z","t","J","h","E","D","W","A"]
 

  generateCaptch(){
    let captch=""
    for(let i=0;i<6;i++){
      if(i==2||i==4||i==5){
        captch+=this.alpahabate[Math.floor(Math.random()*10)]
        
      }
      else{
        captch+=Math.floor(Math.random()*10)
      }
    }
    
    return captch
  }

  refresh(){
    this.captch=this.generateCaptch()
  }

  

  ngOnInit() {

    this.captch=this.generateCaptch()
    this.username=sessionStorage.getItem("name")

      //load Places Autocomplete
    
      this.mapsAPILoader.load().then(() => {
        this.setCurrentLocation();
        this.geoCoder = new google.maps.Geocoder;
   
        let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
          types: ["address"]
        });
        autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
            //get the place result
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
   
            //verify result
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
   
            //set latitude, longitude and zoom
            this.latitude = place.geometry.location.lat();
            this.longitude = place.geometry.location.lng();
            this.zoom = 12;
          });
        });
      });
    }
    
  
  pay(){
   if(this.captchValue==this.captch){
     this.showError=false
     alert("payment success")

   }
   else{
     this.showError=true
     this.refresh()
   }
  }

  // input text display click on radio button
  setradio(e: string): void   
  {  
  
    this.selectedLink = e;  
          
  }  
  
    isSelected(name: string): boolean   
  {  
  
        if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
            return false;  
  }  
  
        return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
    }  

     // Get Current Location Coordinates
     private setCurrentLocation() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.zoom = 15;
        });
      }
    }
    markerDragEnd($event: MouseEvent) {
      console.log($event);
      this.latitude = $event.coords.lat;
      this.longitude = $event.coords.lng;
      this.getAddress(this.latitude, this.longitude);
    }
   
    getAddress(latitude, longitude) {
      this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
        console.log(results);
        console.log(status);
        if (status === 'OK') {
          if (results[0]) {
            this.zoom = 12;
            this.address = results[0].formatted_address;
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
   
      });
    }

   
     

}
