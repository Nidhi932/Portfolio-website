console.log(
  "%c Kavin!!",
  "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113);padding:20px;"
);
console.log(
  "%cHey Curious, If you like my work feel free to contact me @Kavin",
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
  document.getElementById("containerForScroll").scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
document.getElementById("scrollBtn2").addEventListener("click", function () {
  document.getElementById("containerForScroll").scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
document.getElementById("scrollBtn3").addEventListener("click", function () {
  document.getElementById("containerForScroll").scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
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
