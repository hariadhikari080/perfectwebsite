const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const dropdown = document.querySelector('.dropdown');
const dropButton = document.querySelector('.dropbtn');

menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

dropButton.addEventListener('click', () => {
  const open = dropdown.classList.toggle('open');
  dropButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    if (link.closest('.dropdown-menu')) {
      dropdown.classList.remove('open');
      dropButton.setAttribute('aria-expanded', 'false');
    }
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = String(form.get('name') || '').trim();
  const phone = String(form.get('phone') || '').trim();
  const service = String(form.get('service') || '').trim();
  const message = String(form.get('message') || '').trim();
  const text = `Hello Perfect IT Solution,%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service)}%0AMessage: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/9779864440384?text=${text}`, '_blank', 'noopener,noreferrer');
});
