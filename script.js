///GALERIA
document.getElementById('next').onclick = function () {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
///CURSOR
document.addEventListener("DOMContentLoaded", function () {
    const customCursor = document.querySelector(".custom-cursor");

    document.addEventListener("mousemove", (e) => {
        const x = e.clientX;
        const y = e.clientY;

    customCursor.style.left = (x + 50) + "px";
    customCursor.style.top = (y + 30) + "px";
    });
    document.addEventListener("mouseenter", () => {
        customCursor.style.display = "block";
    });
    document.addEventListener("mouseleave", () => {
        customCursor.style.display = "none";
    });
});
///ANIMACION NAV
document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", function() {
    var botonera = document.querySelector('.botonera');
    if (window.scrollY > 100) {
      botonera.classList.add('scrolled');
    } else {
      botonera.classList.remove('scrolled');
    }
  });
});