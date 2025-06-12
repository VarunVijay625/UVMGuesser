let map;

function initMap() {
    map == new google.maps.Map(document.getElementById("map"), {
        center: { lat: 44.4781, lng: -73.1975 },
        zoom: 16,
        mapTypeId: 'satellite'
    });

    // map.addListener("click", (event) => {
    //     new google.maps.Marker({
    //       position: event.latLng,
    //       map: map,
    //     });
    // });

    // map.addListener('click', function(event) {
    //     lat = event.latLng.lat();
    //     lng = event.latLng.lng();
    //     console.writeLine('Latitude: ' + lat + 'Longitude: ' + lng);
    // });
}

map.addEventListener("click", doSomething)

function doSomething(){
    alert('Hiiii');
}