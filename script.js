// Fungsi untuk masuk ke website
function enterWebsite() {
  const intro = document.getElementById("introScreen");
  intro.classList.add("hide");

  setTimeout(() => {
    intro.style.display = "none";
  }, 800);
}

// Fungsi scroll reveal
function revealOnScroll() {
  const reveals = document.querySelectorAll(".scroll-reveal");

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
