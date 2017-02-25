//window.addEventListener('load', setup);

var setup = function() {
      var input = document.getElementById("input");
      input.addEventListener('input', changeColor, false);
}

var changeColor = function (e) {
      var div = document.getElementById("color");
      div.style.backgroundColor = this.value;
}
setup();
