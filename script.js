let map;

function initMap() {
    map == new google.maps.Map(document.getElementById("map"), {
        center: { lat: 44.4781, lng: -73.1965 },
        zoom: 16,
        mapTypeId: 'satellite'
    });

    map.addListener("click", (event) => {
        new google.maps.Marker({
          position: event.latLng,
          map: map,
        });
      });
}