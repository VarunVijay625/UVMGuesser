let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 44.4781, lng: -73.1975 },
        zoom: 16,
        mapTypeId: 'satellite',
        tilt: 0
    })

    marker = new google.maps.Marker({
            position: { lat: 44.4781, lng: -73.1975 },
            map:map,
            icon: "./images/markers-Photoroom.png",
            title: "Guess",
            draggable: true
    })
    marker.addListener('dragend', function(){
        // var latlng = {
        //     lat: marker.getPosition().lat(),
        //     lng: marker.getPosition().lng()
        // }
        // alert(latlng.lat + ", " + latlng.lng)

    })

const guessButton = document.getElementById("guessBtn");

guessButton.addEventListener("click", doGuess)

function doGuess(){
    var latlng = {
        lat: marker.getPosition().lat(),
        lng: marker.getPosition().lng()
    }
    alert(latlng.lat + ", " + latlng.lng)
}

    // map.addListener("click", function(event){
    //     var x = event.latLng.lat();
    //     var y = event.latLng.lng();
    //     setMarker(map, "Guess", { lat: x, lng: y })
    //     alert(x + " " + y);
        
    //     //(marker.position)
    // });




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

