

document.addEventListener("DOMContentLoaded",()=>{const t="WELCOME TO U-CONNECT",
e=document.getElementById("typing-heading");let i=0;(function n(){i<t.length?(e.innerHTML+=t.charAt(i),i++,setTimeout(n,100))
:(e.style.borderRight="none",document.querySelectorAll(".fade-in-element").forEach(el=>el.classList.add("show")))})()});



/* animation for the upcoming events square box and about us and mt ticket info on homepage (scrolling effect) */

  (function () {
    const box = document.querySelector('.upcoming-events-square-box');
    if (!box) return;

    function update() {
      const vh = window.innerHeight;
      const top = box.getBoundingClientRect().top;

      // Starts opening when the box top is at 90% of the screen,
      // fully open when it reaches 30%.
      const start = vh * 0.9;
      const end = vh * 0.3;
      const progress = Math.min(1, Math.max(0, (start - top) / (start - end)));

      box.style.setProperty('--reveal', progress.toFixed(3));
      box.classList.toggle('is-open', progress >= 1);
    }

    window.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
    window.addEventListener('resize', update);
    update();
  })();




  (function () {
    const targets = [
  ...document.querySelectorAll(
    '.transition-divider-bar, .editorial-title, .editorial-lead, .point-row, .tf-heading, .tf-card, .tf-center'
  )
];
    if (!targets.length || !('IntersectionObserver' in window)) return;

    // Stagger the three numbered points
    document.querySelectorAll('.point-row').forEach((row, i) => {
      row.style.transitionDelay = (i * 0.15) + 's';
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target); // animate once
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

    targets.forEach((el) => {
      el.classList.add('reveal-up');
      observer.observe(el);
    });
  })();


