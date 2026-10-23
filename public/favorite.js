const btn = document.getElementById("favoriteBtn");

// Create a popup element
const message = document.createElement("div");

message.classList.add("toast");
message.textContent = "❤️ Added to Favorites!";

// Add it to the page
document.body.appendChild(message);

btn.addEventListener("click", function () {
    message.classList.add("show");

    setTimeout(function () {
        message.classList.remove("show");
    }, 2500);
});