export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        entry.target.classList.remove('opacity-0', 'translate-y-8');
      }
    });
  }, observerOptions);

  // Observe all sections with scroll-animation class
  const animatedElements = document.querySelectorAll('.scroll-animation');
  animatedElements.forEach((element) => {
    element.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
    observer.observe(element);
  });
};