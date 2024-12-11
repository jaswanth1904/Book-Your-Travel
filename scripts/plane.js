const fromInput = document.getElementById("fromLocation");
const fromDropdown = document.getElementById("fromDropdown");
const toInput = document.getElementById("toLocation");
const toDropdown = document.getElementById("toDropdown");

fromInput.addEventListener("focus", () => {
    fromDropdown.style.display = "block";
});

toInput.addEventListener("focus", () => {
    toDropdown.style.display = "block";
});

// Hide dropdown when clicking outside
document.addEventListener("click", (e) => {
    if (!fromInput.contains(e.target) && !fromDropdown.contains(e.target)) {
        fromDropdown.style.display = "none";
    }
    if (!toInput.contains(e.target) && !toDropdown.contains(e.target)) {
        toDropdown.style.display = "none";
    }
});

// Update input value when clicking a dropdown item
fromDropdown.addEventListener("click", (e) => {
    if (e.target.classList.contains("dropdown-item")) {
        fromInput.value = e.target.textContent;
        fromDropdown.style.display = "none";
    }
});

toDropdown.addEventListener("click", (e) => {
    if (e.target.classList.contains("dropdown-item")) {
        toInput.value = e.target.textContent;
        toDropdown.style.display = "none";
    }
});