(() => {
      var reveals = document.querySelectorAll("[class*= 'reveal']");
      var windowHeight = window.innerHeight;
      var elementVisible = 10;

function reveal() {
  for (var i = 0; i < reveals.length; i++) {
    var elementTop = reveals[i].getBoundingClientRect().top;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener("scroll", reveal, false);

})();