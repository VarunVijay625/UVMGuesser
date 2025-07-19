let map;
let images = [
'images/IMG_8616.jpg',
'images/IMG_8680.jpg',
'images/IMG_8681.jpg',
'images/IMG_8683.jpg',
'images/IMG_8684.jpg',
'images/IMG_8685.jpg',
'images/IMG_0212.jpg',
'images/IMG_9326.jpg',
'images/IMG_8832.jpg',
'images/IMG_2915.jpg',
'images/IMG_1095.jpg',
'images/IMG_0961.jpg',
'images/IMG_3466.jpg',
'images/IMG_1518.jpg',
];

locations_dictionary={ 
    'images/IMG_8616.jpg':[44.47345500985082, -73.19680262565612],
    'images/IMG_8680.jpg':[44.480008032615, -73.20030022621154],
    'images/IMG_8681.jpg':[44.478121051856405, -73.19681871891021],
    'images/IMG_8683.jpg':[44.47837941489673, -73.19493044376372],
    'images/IMG_8684.jpg':[44.47818803498085, -73.19470245599746],
    'images/IMG_8685.jpg':[44.47636989443445, -73.20160377979278],
    'images/IMG_0212.jpg':[44.47830669060071, -73.20096273183822],
    'images/IMG_9326.jpg':[44.47458231996633, -73.19646466732024],
    'images/IMG_8832.jpg':[44.47648089832089, -73.19603014945983],
    'images/IMG_2915.jpg':[44.47831434579355, -73.19455493450164],
    'images/IMG_1095.jpg':[44.47492299684291, -73.19519330024718],
    'images/IMG_0961.jpg':[44.47958318020233, -73.19629032373427],
    'images/IMG_3466.jpg':[44.47146254600169, -73.1943671798706],
    'images/IMG_1518.jpg':[44.47918703124267, -73.20018220901488],
};

const firstImage = 0;
const lastImage = images.length -1;
let currentImage = 0;

function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {

    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

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



  //currentImage++;


}


const guessButton = document.getElementById("guessBtn");

guessButton.addEventListener("click", doGuess)

function doGuess(){
    var latlng = {
        latit: marker.getPosition().lat(),
        long: marker.getPosition().lng()
    }

    //document.getElementById("round").innerHTML = latlng.lat + ", " + latlng.lng + ", " + images[currentImage];
    var flightPlanCoordinates = [
    { lat: latlng.latit, lng: latlng.long },
    { lat: locations_dictionary[images[currentImage]][0], lng: locations_dictionary[images[currentImage]][1] }
  ];
  const flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  flightPath.setMap(map);
}
const nextButton = document.getElementById("nextBtn");
nextButton.addEventListener("click", nextPhoto)

function nextPhoto(){
  initMap();
  
  const imageTag = document.getElementById('image');
  console.log(imageTag);
  currentImage++;
  imageTag.src = images[currentImage];
  

}

