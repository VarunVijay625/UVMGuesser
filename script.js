function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 33.749, lng: -84.388 },
      zoom: 10,
    });

    map.addListener("click", (event) => {
      new google.maps.Marker({
        position: event.latLng,
        map: map,
      });
    });
  }