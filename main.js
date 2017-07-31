window.onload = function main() {

     //window.location.href = "scanned.html";
     
 var form = document.getElementById('scan-form');
 form.style.display = 'none';
 var input = document.getElementById('hkb-search');
 geolocate();
 var options = {                    
    types: ["establishment"],
    offset: 3
};

var offset = 3;
console.log(offset);
    autocomplete = new google.maps.places.Autocomplete(input, options);


 var infowindow = new google.maps.InfoWindow();
 var infowindowContent = document.getElementById('infowindow-content');
 infowindow.setContent(infowindowContent);
 var results = document.getElementsByClassName("pac-item");
 var lineBreaker = document.createElement("br");
 

 console.log(results);
 google.maps.event.addListener(autocomplete, 'place_changed', function() {
     //wanna show form and then populate it 
     form.style.display = "block";
     var seenOn = document.getElementById('seen');
     // seenOn.style.marginTop = "5%";
     var place = autocomplete.getPlace();
     localStorage.setItem("place", place.geometry);
     localStorage.setItem("placeLat", place.geometry.lat);
     localStorage.setItem("placeLng", place.geometry.lng);
     //name field
     var businessName = document.getElementById('businessName');
     businessName.value = place.name;

     //phone field
     var businessPhone = document.getElementById('businessPhone');
     businessPhone.value = place.formatted_phone_number;


     console.log(place);
     for (i = 0; i < place.address_components.length; i++) {
         if (place.address_components[i].types[0] == "postal_code") {
             var businessZip = document.getElementById("zip");
             console.log(place.address_components[i].short_name);
             businessZip.value = place.address_components[i].long_name;
         }
     }
     console.log(autocomplete.getPlace().address_components);

 });

 }

 function geolocate() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var geolocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            var circle = new google.maps.Circle({
              center: geolocation,
              radius: position.coords.accuracy
            });
            autocomplete.setBounds(circle.getBounds());
          });
        }
      }