var map = null;

document.addEventListener("DOMContentLoaded", function () {
  var index = 1;
  function foo() {
    const currentElement = document.getElementById(index);
    var nextElement;
    currentElement.classList.remove("bang");
    if(index >= 7) { 
      nextElement = document.getElementById(1);
      index = 1;
    } else {
      nextElement = document.getElementById(index + 1);
      index++;
    }
    nextElement.classList.add("bang");
  }

  setInterval(foo, 1000);
});

function initMap() {
  map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(37.5141299, 127.0291812),
      zoom: 20
  });
}

window.navermap_authFailure = function () {
  console.log("네이버 지도 API 인증에 실패했습니다.");
}
