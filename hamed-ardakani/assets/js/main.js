function myFunc() {
  var x = document.getElementById("my-nav");
  if (x.className === "nav") {
    x.className += " btn-menu";
  } else {
    x.className = "nav";
  }
}
