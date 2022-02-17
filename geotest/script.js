(function() {
let element = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    navigator.geolocation.getCurrentPosition(mapPosition);
  } else {
    element.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  element.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
};

function mapPosition(pos) {
  let latlon = pos.coords.latitude + "," + pos.coords.longitude;
  let key = "AIzaSyDzAewfvx1JMI2p8JgFwiTgN7qvieGhG3k"
  let img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" + latlon + "&zoom=14&size=400x300&key=" + key + "/";

  document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
};


getLocation();

})();