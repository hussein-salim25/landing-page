// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Interactive effect: highlight menu item on click
document.querySelectorAll(".menu-grid .item").forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("highlight");
  });
});

// Highlight style
const style = document.createElement("style");
style.innerHTML = `
  .highlight {
    border: 2px solid #4b2e2e;
    background-color: rgba(255, 255, 255, 0.7);
    transform: scale(1.05);
  }
`;
document.head.appendChild(style);
// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
  });
});
