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
    'images/IMG_8616.jpg':[44.47295163683276, -73.19708157539367],
    'images/IMG_8680.jpg':[44.48004391527659, -73.20026669859885],
    'images/IMG_8681.jpg':[44.47820277775, -73.19658611111112],
    'images/IMG_8683.jpg':[44.47837941489673, -73.19493044376372],
    'images/IMG_8684.jpg':[44.47818803498085, -73.19470245599746],
    'images/IMG_8685.jpg':[44.47644979810942, -73.20142876565455],
    'images/IMG_0212.jpg':[44.478310518195094, -73.20097614288329],
    'images/IMG_9326.jpg':[44.47458231996633, -73.19646466732024],
    'images/IMG_8832.jpg':[44.47648089832089, -73.19603014945983],
    'images/IMG_2915.jpg':[44.478303819900596, -73.19456298112868],
    'images/IMG_1095.jpg':[44.47495555555555, -73.19525833333334],
    'images/IMG_0961.jpg':[44.479520026197996, -73.19630373477935],
    'images/IMG_3466.jpg':[44.47144436278037, -73.1942961013317],
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

    marker.addListener('click', function(event){
      console.log(marker.getPosition.lat(), marker.getPosition.lng());
    })



  //currentImage++;


}


const guessButton = document.getElementById("nextBtn");

guessButton.addEventListener("click", doGuess);

function doGuess(){
  console.log(document.getElementById("result"));
  if (guessed == false){
    document.getElementById("btnVal").innerHTML = "Next";
    guessed = true;
    var latlng = {
        latit: marker.getPosition().lat(),
        long: marker.getPosition().lng()
    }
    console.log(latlng.latit, latlng.long, images[currentImage])

    var degN = latlng.latit - locations_dictionary[images[currentImage]][0];
    var degW = latlng.long - locations_dictionary[images[currentImage]][1];
    var feetN = degN * 69 * 5280;
    var feetW = degW * 49 * 5280;
    var sqResult = (feetN * feetN) + (feetW * feetW);
    var exactResult = Math.sqrt(sqResult);

      
    var guessLineCoordinates = [
      { lat: latlng.latit, lng: latlng.long },
      { lat: locations_dictionary[images[currentImage]][0], lng: locations_dictionary[images[currentImage]][1] }
    ];
    const guessLine = new google.maps.Polyline({
      path: guessLineCoordinates,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });


    guessLine.setMap(map);


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
    
    const exclamations = [
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

      //reset the button map page

      // DAN COMMENTED THIS OUT
      // document.getElementById("nextBtn").innerHTML = '<a href="finish.html"><p>Finish Game</p></a>';

      document.getElementById("image").style.visibility = "hidden";
      document.getElementById("map").style.visibility = "hidden";
      document.getElementById("nextBtn").style.visibility = "hidden";
      document.getElementById("round").style.visibility = "hidden";
      document.getElementById("result").style.visibility = "hidden";
      document.getElementById("points").style.visibility = "hidden";

      //document.getElementById("over").style.visibility = "visible"
      //document.getElementById("final").style.visibility = "visible";
      document.getElementById("over").style.visibility = "visible";
      document.getElementById("congrats").style.visibility = "visible";
      document.getElementById("stars").style.visibility = "visible";

      const congrs = [
        "You've got some room for improvement!",
        "We all start somewhere!",
        "Never give up!",
        "It's only uphill from here!",
        "You're on your way up!",
        "Not half bad! Wait, nevermind. Exactly half bad.",
        "That's mostly good, right?",
        "That's pretty good!",
        "You know your campus!",
        "That's amazing!",
        "WOW! You are a true UVMGuesser!!!!! This is amazingly impressive!!!!\n -Varun, the developer of the game, who can't even score this high",
      ];

      var finalPts = Math.floor(totalPoints/10)
      console.log('hi');
      console.log(document.getElementById("congrats"));
      
      document.getElementById("congrats").innerHTML = 'You scored a total of ' + totalPoints + ' points. ' + congrs[finalPts];

      document.getElementById("stars").innerHTML = '<img src="images/'+finalPts+'.png" alt="UVM"></img>';


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

