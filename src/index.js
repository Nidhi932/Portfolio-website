console.log(
  "%c Nidhi!!",
  "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113);padding:20px;"
);
console.log(
  "%cHey Curious, If you like my work feel free to contact me @Nidhi",
  "color:#adff2f; font-family:monospace; font-size: 15px"
);

// copyright year
let currentYear = new Date();
document.getElementById("year").innerHTML = currentYear.getFullYear();

// theme
const bodyTheme = document.body;
const switchButton = document.getElementById("switch");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
let storedTheme = localStorage.getItem("theme");

if (storedTheme) {
  if (storedTheme === "light") {
    bodyTheme.classList.add("light-theme");
  } else {
    bodyTheme.classList.add("dark-theme");
  }
} else {
  if (prefersDarkScheme.matches) {
    bodyTheme.classList.add("dark-theme");
  } else {
    bodyTheme.classList.add("light-theme");
  }
}

// Theme toggle
switchButton.addEventListener("click", () => {
  if (bodyTheme.classList.contains("dark-theme")) {
    bodyTheme.classList.replace("dark-theme", "light-theme");
    localStorage.setItem("theme", "light");
  } else {
    bodyTheme.classList.replace("light-theme", "dark-theme");
    localStorage.setItem("theme", "dark");
  }
});

// scroll to top
document.getElementById("scrollBtn1").addEventListener("click", function () {
  document.getElementById("containerForScroll").scrollTo({ top: 0, left: 0, behavior: "smooth" });
});
document.getElementById("scrollBtn2").addEventListener("click", function () {
  document.getElementById("containerForScroll").scrollTo({ top: 0, left: 0, behavior: "smooth" });
});
document.getElementById("scrollBtn3").addEventListener("click", function () {
  document.getElementById("containerForScroll").scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

// IntersectionObserver — skip on mobile (carousel handles visibility)
const isMobile = window.innerWidth <= 768;

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
}, observerOptions);

document.querySelectorAll(".project-card").forEach((card) => {
  if (isMobile) {
    // force visible so carousel works — no fade-in animation on mobile
    card.classList.add("animate");
  } else {
    observer.observe(card);
  }
});

// Carousel (mobile only)
function initCarousel() {
  if (!isMobile) return;

  const track  = document.getElementById("carouselTrack");
  const prev   = document.getElementById("carouselPrev");
  const next   = document.getElementById("carouselNext");
  const dotsEl = document.getElementById("carouselDots");

  if (!track || !prev || !next || !dotsEl) return;

  const cards = track.querySelectorAll(".project-card");
  const total = cards.length;
  let current = 0;

  // build dot indicators
  cards.forEach(function (_, i) {
    const d = document.createElement("button");
    d.className = "carousel-dot" + (i === 0 ? " active" : "");
    d.setAttribute("aria-label", "Go to project " + (i + 1));
    d.addEventListener("click", function () { goTo(i); });
    dotsEl.appendChild(d);
  });

  function goTo(idx) {
    current = idx;
    track.style.transform = "translateX(-" + current * 100 + "%)";
    dotsEl.querySelectorAll(".carousel-dot").forEach(function (d, i) {
      d.classList.toggle("active", i === current);
    });
    prev.disabled = current === 0;
    next.disabled = current === total - 1;
  }

  prev.addEventListener("click", function () {
    if (current > 0) goTo(current - 1);
  });
  next.addEventListener("click", function () {
    if (current < total - 1) goTo(current + 1);
  });

  // swipe support
  let startX = 0;
  track.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX;
  }, { passive: true });
  track.addEventListener("touchend", function (e) {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0 && current < total - 1) goTo(current + 1);
      if (diff < 0 && current > 0)         goTo(current - 1);
    }
  }, { passive: true });

  // start at first card
  goTo(0);
}

initCarousel();

// Insights panel
function openInsightsPanel(projectName) {
  alert(`Opening insights for: ${projectName}`);
}

document.documentElement.style.scrollBehavior = "smooth";