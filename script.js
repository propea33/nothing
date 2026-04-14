/* ── Dark mode ── */
function toggleDark() {
  document.documentElement.classList.toggle('dark');
  const icon = document.getElementById('theme-icon');
  icon.textContent = document.documentElement.classList.contains('dark') ? 'light_mode' : 'dark_mode';
}

/* ── Mobile nav ── */
let navOpen = false;
function toggleNav() { navOpen = !navOpen; applyNav(); }
function closeNav()  { navOpen = false;  applyNav(); }
function applyNav() {
  document.getElementById('mobile-nav').classList.toggle('open', navOpen);
  document.getElementById('b1').style.transform = navOpen ? 'rotate(45deg) translate(3px,3px)' : '';
  document.getElementById('b2').style.opacity   = navOpen ? '0' : '1';
  document.getElementById('b3').style.transform = navOpen ? 'rotate(-45deg) translate(3px,-3px)' : '';
}

/* ── Scroll reveal ── */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ── Void canvas click ── */
function voidClick(card) {
  const orb = card.querySelector('#orb');
  orb.style.transform = 'scale(3)';
  orb.style.opacity = '0';
  setTimeout(() => {
    orb.style.transition = 'none';
    orb.style.transform = '';
    orb.style.opacity = '';
    setTimeout(() => orb.style.transition = '', 30);
  }, 500);
}

/* ── FAQ ── */
function toggleFaq() {
  const faq  = document.getElementById('faq');
  const icon = document.getElementById('faq-icon');
  const isOpen = faq.classList.toggle('open');
  icon.textContent = isOpen ? 'expand_less' : 'expand_more';
}

/* ── Email form ── */
function handleSubmit(e) {
  e.preventDefault();
  document.getElementById('success-msg').classList.remove('hidden');
  e.target.style.opacity = '0.4';
  e.target.style.pointerEvents = 'none';
}
