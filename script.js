let map;

let images = [
  'images/Image (1).jpg',
  'images/Image (2).jpg',
  'images/Image (3).jpg',
  'images/Image (4).jpg',
  'images/Image (5).jpg',
  'images/Image (6).jpg',
  'images/Image (7).jpg',
  'images/Image (8).jpg',
  'images/Image (9).jpg',
  'images/Image (10).jpg',
  'images/Image (11).jpg',
  'images/Image (12).jpg',
  'images/Image (13).jpg',
  'images/Image (14).jpg',
  'images/Image (15).jpg',
  'images/Image (16).jpg',
  'images/Image (17).jpg',
  'images/Image (18).jpg',
  'images/Image (19).jpg',
  'images/Image (20).jpg',
  'images/Image (21).jpg',
  'images/Image (22).jpg',
  'images/Image (23).jpg',
  'images/Image (24).jpg',
  'images/Image (25).jpg',
  'images/Image (26).jpg',
  'images/Image (27).jpg',
  'images/Image (28).jpg',
  'images/Image (29).jpg',
  'images/Image (30).jpg',
  'images/Image (31).jpg',
  'images/Image (32).jpg',
  'images/Image (33).jpg',
  'images/Image (34).jpg',
  'images/Image (35).jpg',
  'images/Image (36).jpg',
  'images/Image (37).jpg',
  'images/Image (38).jpg',
  'images/Image (39).jpg',
  'images/Image (40).jpg',
  'images/Image (41).jpg',
  'images/Image (42).jpg',
  'images/Image (43).jpg',
  'images/Image (44).jpg',
  'images/Image (45).jpg',
  'images/Image (46).jpg',
  'images/Image (47).jpg',
  'images/Image (48).jpg',
  'images/Image (49).jpg',
  'images/Image (50).jpg',
  'images/Image (51).jpg',
  'images/Image (52).jpg',
  'images/Image (53).jpg',
  'images/Image (54).jpg',
  'images/Image (55).jpg',
  'images/Image (56).jpg',
  'images/Image (57).jpg',
  'images/Image (58).jpg',
  'images/Image (59).jpg',
  'images/Image (60).jpg',
  'images/Image (61).jpg',
  'images/Image (62).jpg',
  'images/Image (63).jpg',
  'images/Image (64).jpg',
  'images/Image (65).jpg',
  'images/Image (66).jpg',
  'images/Image (67).jpg',
  'images/Image (68).jpg',
  'images/Image (69).jpg',
  'images/Image (70).jpg',
  'images/Image (71).jpg',
  'images/Image (72).jpg',
  'images/Image (73).jpg',
  'images/Image (74).jpg',
  'images/Image (75).jpg',
  'images/Image (76).jpg',
  'images/Image (77).jpg',
  'images/Image (78).jpg',
  'images/Image (79).jpg',
  'images/Image (80).jpg',
  'images/Image (81).jpg',
  'images/Image (82).jpg',
  'images/Image (83).jpg',
  'images/Image (84).jpg',
  'images/Image (85).jpg',
  'images/Image (86).jpg',
  'images/Image (87).jpg',
  'images/Image (88).jpg',
  'images/Image (89).jpg',
  'images/Image (90).jpg',
  'images/Image (91).jpg',
  'images/Image (92).jpg',
  'images/Image (93).jpg',
  'images/Image (94).jpg',
  'images/Image (95).jpg',
  'images/Image (96).jpg',
  'images/Image (97).jpg',
  'images/Image (98).jpg',
  'images/Image (99).jpg',
  'images/Image (100).jpg',
  'images/Image (101).jpg',
  'images/Image (102).jpg',
  'images/Image (103).jpg',
  'images/Image (104).jpg',
  'images/Image (105).jpg',
  'images/Image (106).jpg',
  'images/Image (107).jpg',
  'images/Image (108).jpg',
  'images/Image (109).jpg',
  'images/Image (110).jpg',
  'images/Image (111).jpg',
  'images/Image (112).jpg',
  'images/Image (113).jpg',
  'images/Image (114).jpg',
  'images/Image (115).jpg',
  'images/Image (116).jpg',
  'images/Image (117).jpg',
  'images/Image (118).jpg',
  'images/Image (119).jpg',
  'images/Image (120).jpg',
  'images/Image (121).jpg',
  'images/Image (122).jpg',
  'images/Image (123).jpg',
  'images/Image (125).jpg',
  'images/Image (126).jpg',
  'images/Image (127).jpg',
  'images/Image (128).jpg',
  'images/Image (129).jpg',
  'images/Image (130).jpg',
  'images/Image (131).jpg',
  'images/Image (132).jpg',
  'images/Image (133).jpg',
  'images/Image (134).jpg',
  'images/Image (135).jpg',
  'images/Image (136).jpg',
  'images/Image (137).jpg',
  'images/Image (138).jpg',
  'images/Image (139).jpg',
  'images/Image (140).jpg',
  'images/Image (141).jpg',
  'images/Image (142).jpg',
  'images/Image (143).jpg',
  'images/Image (144).jpg',
  'images/Image (145).jpg',
  'images/Image (146).jpg',
  'images/Image (148).jpg',
  'images/Image (149).jpg',
  'images/Image (150).jpg',
  'images/Image (151).jpg',
  'images/Image (152).jpg',
  'images/Image (153).jpg',
  'images/Image (154).jpg',
  'images/Image (155).jpg',
  'images/Image (156).jpg',
  'images/Image (157).jpg',
  'images/Image (158).jpg',
  'images/Image (159).jpg',
  'images/Image (160).jpg',
  'images/Image (161).jpg',
  'images/Image (163).jpg',
  'images/Image (164).jpg',
  'images/Image (165).jpg',
  'images/Image (167).jpg',
  'images/Image (168).jpg',
  'images/Image (169).jpg',
  'images/Image (170).jpg'
];
//get rid of the crow image
locations_dictionary={ 
  'images/Image (1).jpg':[ 44.46853722387952 ,-73.19849452034418],
  'images/Image (2).jpg':[ 44.47458614780836 ,-73.19647673726085],
  'images/Image (3).jpg':[ 44.46881730638733 ,-73.19525230884551],
  'images/Image (4).jpg':[ 44.46855315865572 ,-73.1956814622879],
  //fix this one too
  'images/Image (5).jpg':[ 44.47557755019155 ,-73.1959523653984],
  'images/Image (6).jpg':[ 44.46825359836866 ,-73.196915948987],
  'images/Image (7).jpg':[ 44.47871241445852 ,-73.19994617462157],
  'images/Image (8).jpg':[ 44.47109122437439 ,-73.19394339084624],
  'images/Image (9).jpg':[ 44.47831831989777 ,-73.1961621564935],
  'images/Image (10).jpg':[ 44.477701927155096 ,-73.19562245368957],
  'images/Image (11).jpg':[ 44.47230183901508 ,-73.1942585504055],
  'images/Image (12).jpg':[ 44.47828372501252 ,-73.19628227710723],
  'images/Image (13).jpg':[ 44.478301906102025 ,-73.19612939119338],
  'images/Image (14).jpg':[ 44.47833922516288 ,-73.19606904149055],
  'images/Image (15).jpg':[ 44.47233437692771 ,-73.1936832165718],
  'images/Image (16).jpg':[ 44.471431921626575 ,-73.19491166830062],
  'images/Image (17).jpg':[ 44.47129028368448 ,-73.19488752841949],
  'images/Image (18).jpg':[ 44.47794689538105 ,-73.19584775924682],
  'images/Image (19).jpg':[ 44.47674309631793 ,-73.19592822551726],
  'images/Image (20).jpg':[ 44.471211808460524 ,-73.19450397253036],
  'images/Image (21).jpg':[ 44.47854352267548 ,-73.19628294765948],
  'images/Image (22).jpg':[ 44.478023447740775 ,-73.19592286109923],
  'images/Image (23).jpg':[ 44.47013419898105 ,-73.19508064746856],
  'images/Image (24).jpg':[ 44.48252837723626 ,-73.19274176120761],
  'images/Image (25).jpg':[ 44.47875643150025 ,-73.1969206428528],
  'images/Image (26).jpg':[ 44.47776316930796 ,-73.19714594841003],
  'images/Image (27).jpg':[ 44.47800239585186 ,-73.1962956881523],
  'images/Image (28).jpg':[ 44.4775306401674 ,-73.19675166368484],
  'images/Image (29).jpg':[ 44.47960805902952 ,-73.19628227710723],
  'images/Image (30).jpg':[ 44.478026318452386 ,-73.19612268567084],
  'images/Image (31).jpg':[ 44.47492491074798 ,-73.19518257141112],
  'images/Image (32).jpg':[ 44.47951954775837 ,-73.19787617981433],
  'images/Image (33).jpg':[ 44.48323594872058 ,-73.19152336776256],
  'images/Image (34).jpg':[ 44.47903010192677 ,-73.20024121761321],
  'images/Image (35).jpg':[ 44.48313439230168 ,-73.190747538805],
  'images/Image (36).jpg':[ 44.46964993815322 ,-73.19840658664702],
  'images/Image (37).jpg':[ 44.471619495669245 ,-73.19458712100982],
  'images/Image (38).jpg':[ 44.47898225753914 ,-73.19955993652343],
  'images/Image (39).jpg':[ 44.478301906102025 ,-73.19457236886024],
  'images/Image (40).jpg':[ 44.474670360247714 ,-73.19498945236205],
  'images/Image (41).jpg':[ 44.47834113896028 ,-73.19493580818175],
  'images/Image (42).jpg':[ 44.47925313921395 ,-73.19967311276912],
  'images/Image (43).jpg':[ 44.47538233329316 ,-73.19524694442748],
  'images/Image (44).jpg':[ 44.469656931541465 ,-73.19911626897067],
  'images/Image (45).jpg':[ 44.46927190566244 ,-73.19767300248145],
  'images/Image (46).jpg':[ 44.47043662070125 ,-73.19733370304107],
  'images/Image (47).jpg':[ 44.478325828579685 ,-73.19612670898437],
  'images/Image (48).jpg':[ 44.48112660446529 ,-73.20260960817336],
  'images/Image (49).jpg':[ 44.47542922368613 ,-73.19535222113132],
  'images/Image (50).jpg':[ 44.47605984796389 ,-73.19700647354125],
  'images/Image (51).jpg':[ 44.4706031433847 ,-73.19725726008414],
  'images/Image (52).jpg':[ 44.47023660144823 ,-73.1969260072708],
  'images/Image (53).jpg':[ 44.481242383560634 ,-73.20295561313628],
  'images/Image (54).jpg':[ 44.48063765054527 ,-73.20042897224425],
  'images/Image (55).jpg':[ 44.470601229333454 ,-73.19832612037658],
  'images/Image (56).jpg':[ 44.468576128070865 ,-73.19877673149112],
  //fix 56
  'images/Image (57).jpg':[ 44.47889230998424 ,-73.19954384326934],
  'images/Image (58).jpg':[ 44.48122420338745 ,-73.2029596364498],
  'images/Image (59).jpg':[ 44.46709649643232 ,-73.19868821859359],
  'images/Image (60).jpg':[ 44.47848467358244 ,-73.19677580356597],
  'images/Image (61).jpg':[ 44.47626654578904 ,-73.19638017773627],
  'images/Image (62).jpg':[ 44.483471803974496 ,-73.1921731328964],
  'images/Image (63).jpg':[ 44.48136486037008 ,-73.20288855791091],
  'images/Image (64).jpg':[ 44.47402728035308 ,-73.1946568584442],
  'images/Image (65).jpg':[ 44.47854017354173 ,-73.19421429395675],
  'images/Image (66).jpg':[ 44.47834879414897 ,-73.19928635120391],
  'images/Image (67).jpg':[ 44.46975521258767 ,-73.19924343585967],
  'images/Image (68).jpg':[ 44.47843443650492 ,-73.1945468878746],
  'images/Image (69).jpg':[ 44.47026052723229 ,-73.19842267990111],
  'images/Image (70).jpg':[ 44.47956212887321 ,-73.19916967511176],
  'images/Image (71).jpg':[ 44.47511821527408 ,-73.18964649200439],
  'images/Image (72).jpg':[ 44.474875149083736 ,-73.19431085348128],
  'images/Image (73).jpg':[ 44.47764068493806 ,-73.1849472618103],
  'images/Image (74).jpg':[ 44.478589932080986 ,-73.19961358070373],
  'images/Image (75).jpg':[ 44.47878226757426 ,-73.20077229499816],
  'images/Image (76).jpg':[ 44.477967947289976 ,-73.1968348121643],
  'images/Image (77).jpg':[ 44.46842299846446 ,-73.19831539154052],
  'images/Image (78).jpg':[ 44.477539252374314 ,-73.19596041202544],
  'images/Image (79).jpg':[ 44.47231236598908 ,-73.19312263488769],
  'images/Image (80).jpg':[ 44.47845596668624 ,-73.19632519245147],
  //fix 80
  'images/Image (81).jpg':[ 44.46844118262569 ,-73.19807868659495],
  'images/Image (82).jpg':[ 44.470103573909476 ,-73.19906641006472],
  'images/Image (83).jpg':[ 44.473564105324705 ,-73.1966899728775],
  'images/Image (84).jpg':[ 44.47483399998266 ,-73.19632519245147],
  'images/Image (85).jpg':[ 44.478606199286546 ,-73.19655049800872],
  'images/Image (86).jpg':[ 44.46862780922301 ,-73.19394070863721],
  'images/Image (87).jpg':[ 44.477324903735564 ,-73.1985460615158],
  'images/Image (88).jpg':[ 44.477502889714344 ,-73.19856215476989],
  'images/Image (89).jpg':[ 44.467982748606794 ,-73.19849509954452],
  'images/Image (90).jpg':[ 44.47372296329008 ,-73.194799015522],
  'images/Image (91).jpg':[ 44.47862725095764 ,-73.19871101737021],
  'images/Image (92).jpg':[ 44.46694336294372 ,-73.19883037567138],
  'images/Image (93).jpg':[ 44.466767258935135 ,-73.19870699405669],
  'images/Image (94).jpg':[ 44.478429173570376 ,-73.19896716833114],
  'images/Image (95).jpg':[ 44.478425345981435 ,-73.19898326158521],
  'images/Image (96).jpg':[ 44.47179462803276 ,-73.19357190489768],
  'images/Image (97).jpg':[ 44.476349798872796 ,-73.1948553419113],
  'images/Image (98).jpg':[ 44.477064622186724 ,-73.19723714351653],
  'images/Image (99).jpg':[ 44.47557946407963 ,-73.19471989035605],
  'images/Image (100).jpg':[ 44.47754116619788 ,-73.2006971931457],
  'images/Image (101).jpg':[ 44.46973607179559 ,-73.19785405158996],
  'images/Image (102).jpg':[ 44.46965185223527 ,-73.1980069375038],
  'images/Image (103).jpg':[ 44.4775172433989 ,-73.19416735529903],
  'images/Image (104).jpg':[ 44.46868140444323 ,-73.19851655721664],
  'images/Image (105).jpg':[ 44.46849094977695 ,-73.19850448727607],
  'images/Image (106).jpg':[ 44.469456615514545 ,-73.19950629234313],
  'images/Image (107).jpg':[44.47700146545943 ,-73.19702793121337],
  'images/Image (108).jpg':[ 44.47614692908146 ,-73.1970178729296],
  'images/Image (109).jpg':[44.468912533265545 ,-73.198266441226],
  'images/Image (110).jpg':[44.46976191186391 ,-73.19760594725608],
  'images/Image (111).jpg':[44.470294980343944 ,-73.19679726123809],
  'images/Image (112).jpg':[44.4784368287476 ,-73.19857288360595],
  'images/Image (113).jpg':[44.4796807817031 ,-73.19990862369536],
  //fix 113
  'images/Image (114).jpg':[44.48086107716006 ,-73.2016715055704],
  'images/Image (115).jpg':[44.46882113460664 ,-73.1952684020996],
  'images/Image (116).jpg':[44.478117224244485 ,-73.19594700098037],
  'images/Image (117).jpg':[44.477866036842265 ,-73.19894168734554],
  'images/Image (118).jpg':[44.476235923934986 ,-73.19688175082206],
  'images/Image (119).jpg':[44.47806555149576 ,-73.19644857406615],
  'images/Image (120).jpg':[44.477935412518434 ,-73.1957726573944],
  'images/Image (121).jpg':[44.480442450575644 ,-73.19614816665649],
  //will have to look over this
  'images/Image (122).jpg':[ 44.472764067071964 ,-73.19711912631988],
  'images/Image (123).jpg':[44.477694271881475 ,-73.19370735645293],
  'images/Image (125).jpg':[44.47136205971179 ,-73.19770653009414],
  'images/Image (126).jpg':[44.476323961721434 ,-73.19644320964812],
  'images/Image (127).jpg':[44.47721581528643 ,-73.19650758266448],
  'images/Image (128).jpg':[ 44.47784644104532 ,-73.19400138509371],
  'images/Image (129).jpg':[ 44.47004631553897 ,-73.19743708791991],
  'images/Image (130).jpg':[ 44.47950854364511 ,-73.1991039609909],
  'images/Image (131).jpg':[ 44.47920999647306 ,-73.19916833400725],
  'images/Image (132).jpg':[ 44.4759966901492 ,-73.19671411275863],
  'images/Image (133).jpg':[ 44.47641582709625 ,-73.19802034854888],
  'images/Image (134).jpg':[ 44.47504358455534 ,-73.19442332269087],
  //look over 134
  'images/Image (135).jpg':[ 44.47101011708055 ,-73.1957258863747],
  'images/Image (136).jpg':[ 44.472969027103666 ,-73.19549406852735],
  'images/Image (137).jpg':[ 44.47326932326606 ,-73.19587062556364],
  //look iver 137
  'images/Image (138).jpg':[ 44.472815694099566 ,-73.19497290044657],
  'images/Image (139).jpg':[ 44.47828200413799 ,-73.20093774685517],
  'images/Image (140).jpg':[ 44.47985267254186 ,-73.19908656414415],
  'images/Image (141).jpg':[ 44.47134666958627 ,-73.196712990576],
  'images/Image (142).jpg':[ 44.46712744414855 ,-73.1948029750618],
  'images/Image (143).jpg':[ 44.46697549218234 ,-73.19447986431487],
  'images/Image (144).jpg':[ 44.47162476803082 ,-73.19491380665062],
  'images/Image (145).jpg':[ 44.47173239483412 ,-73.19770512506571],
  'images/Image (146).jpg':[ 44.478637846662835 ,-73.1966136642735],
  //missing 147
  'images/Image (148).jpg':[ 44.47039036520223 ,-73.1981099412398],
  'images/Image (149).jpg':[ 44.475225629423484 ,-73.19596624228835],
  'images/Image (150).jpg':[ 44.472305330376365 ,-73.19387305255066],
  'images/Image (151).jpg':[ 44.471418568149474 ,-73.19672456319327],
  'images/Image (152).jpg':[ 44.476307368481876 ,-73.19527501588118],
  'images/Image (153).jpg':[ 44.48503046879867 ,-73.19295787023772],
  'images/Image (154).jpg':[ 44.472964114598156 ,-73.19550541976575],
  'images/Image (155).jpg':[ 44.47142854494635 ,-73.19489762398041],
  'images/Image (156).jpg':[ 44.476595659417484 ,-73.19579548767514],
  'images/Image (157).jpg':[ 44.47261358814653 ,-73.19566526925948],
  'images/Image (158).jpg':[ 44.46800709702126 ,-73.19640389086251],
  'images/Image (159).jpg':[ 44.46800709702126 ,-73.19640389086251],
  'images/Image (160).jpg':[ 44.47172521995244 ,-73.19346352349905],
  'images/Image (161).jpg':[ 44.47022646212036 ,-73.19793850947555],
  //missing 162
  'images/Image (163).jpg':[ 44.474201010950146 ,-73.19466983933937],
  'images/Image (164).jpg':[ 44.47600023148079 ,-73.19645772988302],
  'images/Image (165).jpg':[ 44.47659333494322 ,-73.19438473609272],
  //missing 166
  'images/Image (167).jpg':[ 44.477062092490726 ,-73.19642948384913],
  'images/Image (168).jpg':[ 44.48068798644297 ,-73.20093230886482],
  'images/Image (169).jpg':[ 44.47292726441361 ,-73.19546663217092],
  'images/Image (170).jpg':[ 44.48132392213592 ,-73.20284739900502]
};

let cood = false;
let guessed = true;
const firstImage = 0;
const lastImage = images.length -1;
let currentImage = 0;
var totalPoints = 0;
var roundNum = 0;
var longitude = 0;

 function shuffle(array) {
   let currentIndex = array.length;

   while (currentIndex != 0) {

     let randomIndex = Math.floor(Math.random() * array.length);
     currentIndex--;

     [array[currentIndex], array[randomIndex]] = [
       array[randomIndex], array[currentIndex]];
   }
 }

function initMap(lat, lng, zoom) {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: lat, lng: lng},
        zoom: zoom,
        mapTypeId: 'satellite',
        tilt: 0
    })

    // marker = new google.maps.Marker({
    //   position: { lat: 44.4781, lng: -73.1975 },
    //   map:map,
    //   icon: "./images/markers-Photoroom.png",
    //   title: "Guess",
    //   draggable: true
    // })

  //currentImage++;

  map.addListener('click', function(event){
    cood = true;
  
  const markLT = event.latLng.lat();
  const markLN = event.latLng.lng();
  const L = map.center.lng()
  const LN = map.center.lat()
  const z = map.zoom

  initMap(LN, L, z)
  nextBtn.disabled = false;


  marker = new google.maps.Marker({
  position: { lat: markLT, lng: markLN },
  map:map,
  icon: "./images/markers-Photoroom.png",
  title: "Guess",
  draggable: true})
}

)


}



const guessButton = document.getElementById("nextBtn");

guessButton.addEventListener("click", doGuess);

function doGuess(){
  // console.log(document.getElementById("result"));
  
  if(guessed == false){
      
    // if(cood == false){
    //   alert("guess first")
    // }
    // while(guessed == false){
    //   if(longitude == 0){
    //     alert('Please guess first');

    //   }
    // }
    document.getElementById("btnVal").innerHTML = "Next";
    guessed = true;
    if(typeof marker !== 'undefined'){
      var latitude =  marker.getPosition().lat();
      longitude = marker.getPosition().lng();
    }

    var latlng = {
        latit: latitude,
        long: longitude
    }
    console.log("'"+images[currentImage]+"':[", latlng.latit, "," + latlng.long+"],")

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

    if(roundNum == 1){
      document.getElementById("points").innerHTML = '';
    }
    else{
      document.getElementById("points").innerHTML = totalPoints + '/100 points';
    }



    cood = false


  }
  else {
    if (roundNum >= 10){

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
      document.getElementById("againBtn").style.visibility = "visible";

      roundNum = 0;

      const congrs = [
        "You've got some room for improvement!",
        "We all start somewhere!",
        "Never give up!",
        "It's only uphill from here!",
        "You're on your way up!",
        "Not half bad! Wait, nevermind. Just about half bad.",
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
    initMap(44.4781, -73.1975, 16);
    document.getElementById("btnVal").innerHTML = "Guess";
    nextBtn.disabled = true;
    const imageTag = document.getElementById('image');

    roundNum++;
    currentImage++;
    imageTag.src = images[currentImage];
    document.getElementById("round").innerHTML = 'Round ' + (roundNum) +"/10";
    document.getElementById("result").innerHTML = '';
    guessed = false;
    longitude = 0;

    if(roundNum == 1){
      document.getElementById("points").innerHTML = '';
    }
  }
}



function playAgain(){
  if(currentImage >= images.length - 10){
    shuffle(images);
    currentImage = 0;
  }
  guessed = false;
  
  //totalPoints = 0;
  console.log(currentImage);
  points = 0;
  totalPoints = 0;
  document.getElementById("image").style.visibility = "visible";
  document.getElementById("map").style.visibility = "visible";
  document.getElementById("nextBtn").style.visibility = "visible";
  document.getElementById("round").style.visibility = "visible";
  document.getElementById("result").style.visibility = "visible";
  document.getElementById("points").style.visibility = "visible";

  //document.getElementById("over").style.visibility = "visible"
  //document.getElementById("final").style.visibility = "visible";
  document.getElementById("over").style.visibility = "hidden";
  document.getElementById("congrats").style.visibility = "hidden";
  document.getElementById("stars").style.visibility = "hidden";
  document.getElementById("againBtn").style.visibility = "hidden";
}
// const nextButton = document.getElementById("nextBtn");
// nextButton.addEventListener("click", nextPhoto)

// function nextPhoto(){


// }