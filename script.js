document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document.querySelectorAll(".item").forEach((item) => {
    observer.observe(item);
  });

  const heroLogo = document.getElementById("hero-logo");
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      heroLogo.classList.add("shrink");
      header.classList.add("show-logo");
    } else {
      heroLogo.classList.remove("shrink");
      header.classList.remove("show-logo");
    }
  });
});
// Make each product clickable
document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('click', () => {
    const id = item.getAttribute('data-id');
    window.location.href = `product.html?id=${id}`;
  });
});
