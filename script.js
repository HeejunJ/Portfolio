// Mobile nav toggle
const menuBtn = document.getElementById("menuBtn");
const navList = document.getElementById("navList");
if (menuBtn && navList) {
  menuBtn.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
  navList.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => navList.classList.remove("open"));
  });
}

// Back-to-top button visibility
const topLink = document.getElementById("topLink");
if (topLink) {
  window.addEventListener("scroll", () => {
    topLink.classList.toggle("visible", window.scrollY > 700);
  });
}

// Scroll reveal
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && revealEls.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("in"));
}
