function changeTheme() {
  let body = document.querySelector("body");

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}

let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", changeTheme);


function changeTheme() {
  let body = document.querySelector("body");

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}