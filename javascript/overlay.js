document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("overlay-button").addEventListener("click", () => {
        document.getElementById("modular-overlay").remove();
        document.body.classList.remove("no-scroll");
    });
});