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
