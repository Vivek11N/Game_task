document.getElementById("start-btn").addEventListener("click", function () {
    document.querySelector(".arena-selection").style.display = "block";
});

document.querySelectorAll(".arena-btn").forEach(button => {
    button.addEventListener("click", function () {
        const arena = this.getAttribute("data-arena");
        localStorage.setItem("selectedArena", arena); // Store choice
        window.location.href = "levels/level1.html"; // Go to first level
    });
});
