// Menu mobile
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => menu.classList.toggle('open'));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

// Efek muncul saat scroll
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); }
}), { threshold: .15 });
document.querySelectorAll('.reveal, .skill').forEach(el => io.observe(el));

// Tandai menu aktif
const links = [...menu.querySelectorAll('a')];
window.addEventListener('scroll', () => {
  let cur = 'home';
  document.querySelectorAll('section[id]').forEach(s => { if (scrollY >= s.offsetTop - 120) cur = s.id; });
  links.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + cur));
});

document.getElementById('year').textContent = new Date().getFullYear();
