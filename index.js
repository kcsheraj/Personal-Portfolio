// PDF link
document.getElementById("viewResumeBtn").addEventListener("click", function () {
  window.open("Sheraj_KC_Resume_2025.pdf", "_blank");
});

// Add JavaScript to trigger animations on scroll
const sections = document.querySelectorAll(".fade-in");

function checkScroll() {
  sections.forEach((section) => {
    const windowHeight = window.innerHeight;
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < windowHeight * 0.75) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", checkScroll);
window.addEventListener("resize", checkScroll);
checkScroll();

// Generate Stars
const numStars = 100; // Adjust the number of stars as needed
const container = document.querySelector(".stars-background");
for (let i = 0; i < numStars; i++) {
  const star = document.createElement("div");
  star.classList.add("stars");
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  container.appendChild(star);
}
