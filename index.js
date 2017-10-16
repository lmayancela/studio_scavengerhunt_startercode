var num = Math.floor(Math.random() * 100);
console.log(num);

var now = new Date();

console.log(now);

var names = [
        "Daniel", "Jackie", "Lisandro", "Richard", "Abdul", "Ryan", "Andrea", "Alyssa", "Ramata", "Sheng", 
        "Nia", "Steven", "Marcos", "Juan", "Jordan","Edwin", "Daniel L", "Caelan"
];
console.log(names);
    
var  teachers = {
    Peter:["Jablonski"], Devraj:["Mehta"], Kirill:["Cherkashin"], Edwin:["Fuquen"], Joe:["Tessler"], Marcos:["Laro", "Reinhold"] 
};
console.log(teachers);

var numToWord = "/number?locale=:locale&number=:number"
function numberWords(num){
    
}

function getWeather() {
  var url = 'https://hub.docker.com/number?locale=:locale&number=:number';
  
}

to
// locate you.
var map, infoWindow;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 6
  });
  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}
