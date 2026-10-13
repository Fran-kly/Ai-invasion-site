const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const open = navigation.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}
document.querySelectorAll('[data-year]').forEach(el => { el.textContent = String(new Date().getFullYear()); });
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const entries = [...document.querySelectorAll('.reveal')];
  const observer = new IntersectionObserver((items) => {
    items.forEach(item => { if (item.isIntersecting) { item.target.classList.add('is-visible'); observer.unobserve(item.target); } });
  }, {threshold: .07});
  entries.forEach(el => observer.observe(el));
}
