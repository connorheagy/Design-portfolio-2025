// Add interactivity here if needed
console.log("Portfolio loaded successfully.");


function navHoverEffect() {
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
      link.style.color = 'blue';
    });
    link.addEventListener('mouseout', () => {
      link.style.color = ''; // Resets to original
    });
  });
}

// document.addEventListener('DOMContentLoaded', () => {
//   navHoverEffect(); // Attach hover listeners once
// });

window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

// window.addEventListener('scroll', () => {
//   const scrollY = window.scrollY || window.pageYOffset;
//   const navLinks = document.querySelectorAll('nav a');

//   if (scrollY > 300) {
//     document.body.style.backgroundColor = 'black';
//     navLinks.forEach(link => link.style.color = 'white');
    
//   } else {
//     document.body.style.backgroundColor = 'white';
//     navLinks.forEach(link => link.style.color = 'black');
//   }
// });

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 100) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fadeInUp');
        entry.target.classList.remove('hidden');
        observer.unobserve(entry.target); // Optional: only animate once
      }
    });
  }, {
    threshold: 0.1 // Adjust sensitivity
  });

  document.querySelectorAll('.hidden').forEach(el => observer.observe(el));


function progressiveBlur(element, startBlur = 0, endBlur = 10, duration = 1000) {
  const startTime = performance.now();

  function animate(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const blurValue = startBlur + (endBlur - startBlur) * progress;

    element.style.filter = `blur(${blurValue}px)`;

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

// Usage
const blurBox = document.getElementById('blur-box');
progressiveBlur(blurBox, 0, 10, 2000); // blur from 0px to 10px over 2 seconds

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Optional: remove observer after fade-in
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the element is visible
  });

  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
});
