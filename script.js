// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.textContent = open ? "Close ×" : "Menu +";
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      menuBtn.textContent = "Menu +";
    })
  );
}

// Live Seoul time in the top bar
const clock = document.getElementById("clock");
if (clock) {
  const fmt = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Seoul", hour: "2-digit", minute: "2-digit" });
  const tick = () => (clock.textContent = `Seoul ${fmt.format(new Date())} KST`);
  tick();
  setInterval(tick, 20000);
}

// Work index: image preview that follows the cursor
const peek = document.getElementById("peek");
if (peek && window.matchMedia("(hover: hover)").matches) {
  const img = peek.querySelector("img");
  document.querySelectorAll(".index-row[data-peek]").forEach((row) => {
    row.addEventListener("mouseenter", () => {
      img.src = row.dataset.peek;
      peek.classList.add("on");
    });
    row.addEventListener("mouseleave", () => peek.classList.remove("on"));
    row.addEventListener("mousemove", (e) => {
      peek.style.left = e.clientX + "px";
      peek.style.top = e.clientY + "px";
    });
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
    { threshold: 0.08 }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("in"));
}
