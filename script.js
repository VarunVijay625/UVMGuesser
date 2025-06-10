let map;

function initMap() {
    map == new google.maps.Map(document.getElementById("map"), {
        center: { lat: 44.4779, lng: -73.1965 },
        zoom: 12
    });
}