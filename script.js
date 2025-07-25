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
//get rid of the crow image
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
let guessed = true;
const firstImage = 0;
const lastImage = images.length -1;
let currentImage = 0;
var totalPoints = 0;

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


const guessButton = document.getElementById("nextBtn");

guessButton.addEventListener("click", doGuess);

function doGuess(){
  if (guessed == false){
    document.getElementById("btnVal").innerHTML = "Next";
    guessed = true;
    var latlng = {
        latit: marker.getPosition().lat(),
        long: marker.getPosition().lng()
    }

    var degN = latlng.latit - locations_dictionary[images[currentImage]][0];
    var degW = latlng.long - locations_dictionary[images[currentImage]][1];
    var feetN = degN * 69 * 5280;
    var feetW = degW * 49 * 5280;
    var sqResult = (feetN * feetN) + (feetW * feetW);
    var exactResult = Math.sqrt(sqResult);

      
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


    var result = Math.round(exactResult);
    var points = 0;
    if (result > 2640){
      points = 0;
    }
    else if (result <= 2640 && result > 1980){
      points = 1;
    }
    else if (result <= 1980 && result > 1320){
      points = 2;
    }
    else if (result <= 1320 && result > 980){
      points = 3;
    }
    else if (result <= 980 && result > 660){
      points = 4;
    }
    else if (result <= 660 && result > 500){
      points = 5;
    }
    else if (result <= 500 && result > 350){
      points = 6;
    }
    else if (result <= 350 && result > 220){
      points = 7;
    }
    else if (result <= 220 && result > 100){
      points = 8;
    }
    else if (result <= 100 && result > 20){
      points = 9;
    }
    else{
      points = 10;
    }
    totalPoints = totalPoints + points;
    
    let exclamations = [
      "What were you thinking?",
      "Not even close!",
      "Too bad!",
      "Nice try!(Not really).",
      "You can do better!",
      "Not bad!",
      "You're not far off!",
      "Good work!",
      "So close!",
      "Great job!",
      "Excellent!"
    ]

    document.getElementById("result").innerHTML = exclamations[points] + ' Your guess was \n' + result + '\n feet away (' + (exactResult / 5280).toFixed(2) + ' miles). You scored ' + points + '/10 points.';
    document.getElementById("points").innerHTML = totalPoints + '/100 points';
  }
  else {
    if (currentImage >= 10){
    alert('ok');
    }
    initMap();
    document.getElementById("btnVal").innerHTML = "Guess";
    
    const imageTag = document.getElementById('image');
    currentImage++;
    imageTag.src = images[currentImage];
    document.getElementById("round").innerHTML = 'Round ' + (currentImage);
    document.getElementById("result").innerHTML = '';
    guessed = false;
  
  }
}
// const nextButton = document.getElementById("nextBtn");
// nextButton.addEventListener("click", nextPhoto)

// function nextPhoto(){


// }

