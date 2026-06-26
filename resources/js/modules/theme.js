document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("theme-switcher");

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    document.documentElement.style.setProperty("--click-x", `${e.clientX}px`);
    document.documentElement.style.setProperty("--click-y", `${e.clientY}px`);

    if (!document.startViewTransition) {
      document.documentElement.classList.toggle("dark");
      return;
    }

    document.startViewTransition(() => {
      document.documentElement.classList.toggle("dark");
    });
  });
});