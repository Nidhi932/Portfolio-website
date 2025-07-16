console.log(
  "%c Kavin!!",
  "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113);padding:20px;"
);
console.log(
  "%cHey Curious, If you like my work feel free to contact me @Kavin",
  "color:#adff2f; font-family:monospace; font-size: 15px"
);
// copyright year
let $4fa36e821943b400$var$currentYear = new Date();
document.getElementById("year").innerHTML =
  $4fa36e821943b400$var$currentYear.getFullYear();
// theme
const $4fa36e821943b400$var$bodyTheme = document.body;
const $4fa36e821943b400$var$switchButton = document.getElementById("switch");
const $4fa36e821943b400$var$prefersDarkScheme = window.matchMedia(
  "(prefers-color-scheme: dark)"
);
let $4fa36e821943b400$var$storedTheme = localStorage.getItem("theme");
if ($4fa36e821943b400$var$storedTheme) {
  if ($4fa36e821943b400$var$storedTheme === "light")
    $4fa36e821943b400$var$bodyTheme.classList.add("light-theme");
  else $4fa36e821943b400$var$bodyTheme.classList.add("dark-theme");
} else if ($4fa36e821943b400$var$prefersDarkScheme.matches)
  $4fa36e821943b400$var$bodyTheme.classList.add("dark-theme");
else $4fa36e821943b400$var$bodyTheme.classList.add("light-theme");
// Theme toggle
$4fa36e821943b400$var$switchButton.addEventListener("click", () => {
  if ($4fa36e821943b400$var$bodyTheme.classList.contains("dark-theme")) {
    $4fa36e821943b400$var$bodyTheme.classList.replace(
      "dark-theme",
      "light-theme"
    );
    localStorage.setItem("theme", "light");
  } else {
    $4fa36e821943b400$var$bodyTheme.classList.replace(
      "light-theme",
      "dark-theme"
    );
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

//# sourceMappingURL=index.js.map
