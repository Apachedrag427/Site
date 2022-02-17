let element = document.getElementById("counter")
console.log("Webpage started")
// Sets up the auto-refresh after 5 minutes
let meta = document.createElement("meta")
meta.setAttribute("http-equiv", "refresh")
meta.setAttribute("content", "300")
// Adds the meta tag to the head
let head = document.getElementById("head")
head.appendChild(meta)
let count = 0; // It didn't work eariler because I didn't put a semicolon here
// IIFE for grabbing cookie
(function() {
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
count = getCookie("count")
if(count==""||count==null) {
  count = 0
} else {
  element.innerHTML = count.toString()
}
})();

let game = {
  press: function() {
    ++count
    document.cookie = "count=" + count;
    element.innerHTML = count.toString()
    return("Pressed")
  },
  setCount: function(num) {
    count = num
    document.cookie = "count=" + count;
    element.innerHTML = count.toString()
  }
}