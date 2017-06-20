 window.onload = function main() {
     var form = document.getElementById('scan-form');
     //form.style.display = 'none';
     var input = document.getElementById('hkb-search');
     
     var autocomplete = new google.maps.places.Autocomplete(input, "establishment");


     var infowindow = new google.maps.InfoWindow();
     var infowindowContent = document.getElementById('infowindow-content');
     infowindow.setContent(infowindowContent);
     google.maps.event.addListener(autocomplete, 'place_changed', function() {
         //wanna show form and then populate it 
         form.style.display = "block";
         var seenOn = document.getElementById('seen');
        // seenOn.style.marginTop = "5%";
         var place = autocomplete.getPlace();
         //name field
         var businessName = document.getElementById('businessName');
         businessName.value = place.name;
         
         //phone field
         var businessPhone = document.getElementById('businessPhone');
         businessPhone.value = place.formatted_phone_number;
         

         console.log(place);
         for(i = 0; i < place.address_components.length; i++){
         	if(place.address_components[i].types[0] == "postal_code"){
         		var businessZip = document.getElementById("zip");
         		console.log(place.address_components[i].short_name);
         		businessZip.value = place.address_components[i].long_name;	
         	}
         }
         console.log(autocomplete.getPlace().address_components);
         
     });

     function fillInAddress() {
         // Get the place details from the autocomplete object.
         var autocomplete = autocomplete.getPlace();

     }

 }
