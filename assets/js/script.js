// h1
function scrollBanner() {
  scrollPos = window.scrollY;
  var headerText = document.querySelector('#title-home-box h1')
  headerText.style.marginTop = -(scrollPos/3)+"px";
  headerText.style.opacity = 1-(scrollPos/480);
}

window.addEventListener('scroll', scrollBanner);

//h2
function scrollBanner2() {
  scrollPos = window.scrollY;
  var headerText2 = document.querySelector('#title-home-box h2')
  headerText2.style.marginTop = -(scrollPos/13)+"px";
  headerText2.style.opacity = 1-(scrollPos/480);
}

window.addEventListener('scroll', scrollBanner2);

//bar
function scrollBar() {
  scrollPos = window.scrollY;
  var headerBar = document.querySelector('#title-home-box')
  headerBar.style.color = 1-(scrollPos/580);
}

window.addEventListener('scroll', scrollBar);

// Function scroll
function handleClick(target) {
  $(document).ready(function() {
    $('html, body').animate({
      scrollTop: target.offsetTop + 668
    }, 1200);
  });
}
