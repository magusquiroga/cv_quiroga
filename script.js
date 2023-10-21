document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
document.addEventListener("DOMContentLoaded", function () {
    const customCursor = document.querySelector(".custom-cursor");

    document.addEventListener("mousemove", (e) => {
        // Obtén las coordenadas relativas al documento
        const x = e.clientX;
        const y = e.clientY;

    customCursor.style.left = (x + 50) + "px";
    customCursor.style.top = (y + 30) + "px";
    });

    // Muestra el cursor personalizado cuando se mueve el ratón
    document.addEventListener("mouseenter", () => {
        customCursor.style.display = "block";
    });

    // Oculta el cursor personalizado cuando sale del área del cursor
    document.addEventListener("mouseleave", () => {
        customCursor.style.display = "none";
    });
});