document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("order-form");
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});