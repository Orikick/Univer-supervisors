window.onscroll = function () {
    scroll();
  };
  
  function scroll() {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      document.getElementById("back_img").style.filter = "blur(1.15vw)";
    } else {
      document.getElementById("back_img").style.filter = "blur(0vw)";
    }
  }

function onEntry(entry) { entry.forEach(change => { if (change.isIntersecting) { change.target.classList.add('animation'); } }); } let options = { threshold: [0.1] }; let observer = new IntersectionObserver(onEntry, options); let elements = document.querySelectorAll('.item'); for (let elm of elements) { observer.observe(elm); }
