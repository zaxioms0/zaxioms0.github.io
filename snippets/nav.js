document.addEventListener("DOMContentLoaded", () => {
  // Load nav.html
  fetch("/snippets/nav.html")
    .then(r => r.text())
    .then(html => {
      const nav = document.createElement("nav");
      nav.innerHTML = html;
      document.body.prepend(nav);
    });

  // Load nav.css (only once)
  if (!document.querySelector('link[data-nav-css]')) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/snippets/nav.css";
    link.setAttribute("data-nav-css", ""); // marker so it’s not added twice
    document.head.appendChild(link);
  }
});

