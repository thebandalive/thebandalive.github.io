var map = null;

document.addEventListener("DOMContentLoaded", function () {
  var index = 1;
  function foo() {
    const currentElement = document.getElementById("name-" + index);
    var nextElement;
    currentElement.classList.remove("bang");
    if(index >= 7) { 
      nextElement = document.getElementById("name-1");
      index = 1;
    } else {
      nextElement = document.getElementById("name-" + (index + 1));
      index++;
    }
    nextElement.classList.add("bang");
  }

  setInterval(foo, 1000);
});

function initMap() {
  map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(37.5140437, 127.0294944),
      zoom: 17,
      zoomControl: true,
      zoomControlOptions: {
          style: naver.maps.ZoomControlStyle.SMALL,
          position: naver.maps.Position.TOP_RIGHT
      }
  });
}

window.navermap_authFailure = function () {
  console.log("네이버 지도 API 인증에 실패했습니다.");
}
