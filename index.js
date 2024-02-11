document.getElementById("viewResumeBtn").addEventListener("click", function () {
  window.open("Sheraj_KC_Resume.pdf", "_blank");
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
