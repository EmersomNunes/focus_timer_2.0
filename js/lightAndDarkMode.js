const toggleMode = document.querySelector("#toggle-mode");

let darkMode = true;

toggleMode.addEventListener("click", (event) =>  {
    document.documentElement.classList.toggle("light");

    const mode = darkMode ? "light" : "dark";

    darkMode = !darkMode;
});