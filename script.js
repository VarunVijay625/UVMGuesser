let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 44.4781, lng: -73.1975 },
        zoom: 16,
        mapTypeId: 'satellite'
    });


    map.addListener("click", function(event){
        var x = event.latLng.lat();
        var y = event.latLng.lng()
        //alert(x + " and also " + y);
        //marker.se
        marker = new google.maps.Marker({
            position: { lat: x, lng: y },
            map:map,
            label: "Guess"
        })
        //(marker.position)
    });




    // function setPosition({ x, y }){
    //     marker.position = { lat: x, lng: y }
    // }



    // map.addListener("click", (event) => {
    //     new AdvancedMarkerElement({
    //       position: event.latLng,
    //       map: map,
    //     });
    // });

    //  map.addListener('click', function(event) {
    //      lat = event.latLng.lat();
    //      lng = event.latLng.lng();
    //      console.writeLine('Latitude: ' + lat + 'Longitude: ' + lng);
    //  });
}

