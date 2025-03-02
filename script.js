// for gating date on ribbon
const today = new Date();
const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
const formateDate = today.toLocaleDateString('en-US', options);
document.getElementById("date-today").textContent = formateDate;

// for main add
let ads = [
    document.getElementById("ad1"),
    document.getElementById("ad2"),
    document.getElementById("ad3"),
    document.getElementById("ad4"),
    document.getElementById("ad5"),
];

let currentIndex = 0;

function showNextAd() {
    // Hide all ads
    ads.forEach(ad => ad.style.display = "none");
    
    // Show the current ad
    ads[currentIndex].style.display = "block";

    // Move to the next index, reset if at the end
    currentIndex = (currentIndex + 1) % ads.length;
}

// Ensure DOM is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
    // Initial call to show the first ad
    showNextAd();

    // Change ad every 6 seconds
    setInterval(showNextAd, 5000);
});

// categories show more button function
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggleCategories");
    const hiddenCategories = document.querySelectorAll(".hidden-category");
    let isExpanded = false;

    toggleBtn.addEventListener("click", function () {
        hiddenCategories.forEach(category => {
            category.style.display = isExpanded ? "none" : "list-item";
        });
        toggleBtn.textContent = isExpanded ? "More" : "Less";
        isExpanded = !isExpanded;
    });
});
// read full article button 
document.getElementById('toggleContent').addEventListener('click', function(){
    var content = document.querySelector('.hidden-content')
    var computedStyle = window.getComputedStyle(content).display;
    if (computedStyle === "none") {
        content.style.display = "block";
        this.textContent = "Hide article"; // Change button text
    } else {
        content.style.display = "none";
        this.textContent = "Read full article"; // Change back button text
    }

})
 