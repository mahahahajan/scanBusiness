
var autocomplete;
var marker;
var map;

function main() {


    initMap(place);
    console.log("main");
}
window.onload = function main() {
    console.log("hello");
    var input = document.getElementById('hkb-search');
    var options = {                    
    types: ["establishment"]
};
    autocomplete = new google.maps.places.Autocomplete(input, options);
    console.log(autocomplete);
    google.maps.event.addListener(autocomplete, 'place_changed', function() {
    	initMap();
    	fillInAddress();
    	var type = autocomplete.types[0];
    	console.log(type);
    });

}

function initMap() {
    var place = autocomplete;
    console.log(place);
    var uluru = { lat: 0, lng: 0 };
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
function fillInAddress() {
  // Get the place details from the autocomplete object.
  var place = autocomplete.getPlace();
  
  if (marker && marker.setMap) 
    marker.setMap(null);
  marker = new google.maps.Marker({
    position: place.geometry.location,
    
    map: map
  });
  marker = new google.maps.Marker({
    position: place.geometry.location,
    
    map: map
  });
  marker.setPosition(place.geometry.location);
  map.setCenter(place.geometry.location);
  if (place.geometry.viewport) 
    map.fitBounds(place.geometry.viewport);

  

  // Get each component of the address from the place details
  // and fill the corresponding field on the form.
  
}