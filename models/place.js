export class Place {
  constructor(title, imageUri, location, id){
    this.title = title;
    this.imageUri = imageUri;
    this.location = {lat: location.lat, lng: location.lng};
    this.id = id;
  }
}
