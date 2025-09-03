document.addEventListener("DOMContentLoaded", () => {
  // Intersection Observer for fade-in effect
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".item").forEach((item) => {
    observer.observe(item);
  });

  // Hero logo shrink and header show
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

  // Make each product clickable
  document.querySelectorAll(".item").forEach((item) => {
    item.addEventListener("click", () => {
      const id = item.getAttribute("data-id");
      window.location.href = `product.html?id=${id}`;
    });
  });

  // Mobile-friendly touch: toggle hover image on tap
  document.querySelectorAll(".item").forEach((item) => {
    let tapped = false;
    item.addEventListener("touchstart", () => {
      if (!tapped) {
        item.querySelector("img:first-child").style.opacity = "0";
        item.querySelector(".hover-img").style.opacity = "1";
        tapped = true;
      } else {
        item.querySelector("img:first-child").style.opacity = "1";
        item.querySelector(".hover-img").style.opacity = "0";
        tapped = false;
      }
    });
  });
});
