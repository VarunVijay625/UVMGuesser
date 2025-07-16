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

    shuffle(images);


const guessButton = document.getElementById("guessBtn");

guessButton.addEventListener("click", doGuess)

function doGuess(){
    var latlng = {
        lat: marker.getPosition().lat(),
        lng: marker.getPosition().lng()
    }
    const imageTag = document.getElementById('image');
    currentImage++;
    imageTag.src = images[currentImage]
    //document.getElementById("round").innerHTML = latlng.lat + ", " + latlng.lng + ", " + images[currentImage];
    console.log(latlng.lat + ", " + latlng.lng + ", " + images[currentImage])


    }
}

