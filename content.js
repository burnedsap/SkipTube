setTimeout(function() {
  Skipper();
}, 2000);

function Skipper() {
  var arr = [];
  var arrS  = [];

  var video = document.getElementsByTagName("video");
  var link = document.links;


  if(!video.paused) {
    for (var i = link.length - 1; i > 0; i--) {
      if (link[i].host == location.host) {
        arr.push(link[i].href);
      }
    }

    for (var j = 0; j < arr.length; j++) {
      if(arr[j].indexOf('https://www.youtube.com/watch?v')>= 0) {
        arrS.push(arr[j]);
      }
    }

    var rando =  Math.floor(Math.random()*arrS.length);
    var randomElement = arrS[rando];

    setTimeout(function() {
      window.location.href = randomElement;
    }, 880);

  }
}
