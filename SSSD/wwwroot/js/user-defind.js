function toggleNav() {
  var x = document.getElementById("navLinks");
  if (x.classList.contains("w3-show")) {
      x.classList.remove("w3-show");
      x.classList.add("w3-hide");
  } else {
      x.classList.remove("w3-hide");
      x.classList.add("w3-show");
  }
}