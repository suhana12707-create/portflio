document.getElementById('year').textContent = new Date().getFullYear();

/* preloader */
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('preloader').classList.add('hidden'), 500);
});

/* theme toggle (in-memory only) */
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
themeToggle.addEventListener('click', () => {
  const isDark = body.getAttribute('data-theme') === 'dark';
  body.setAttribute('data-theme', isDark ? 'light' : 'dark');
  themeToggle.innerHTML = isDark ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
});

/* mobile menu */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

/* scroll progress + scroll-top button */
const progressBar = document.getElementById('progress-bar');
const scrollTopBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  progressBar.style.width = scrolled + '%';
  scrollTopBtn.classList.toggle('show', h.scrollTop > 500);
});
scrollTopBtn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

/* reveal on scroll */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); revealObserver.unobserve(e.target);} });
}, {threshold:0.12});
revealEls.forEach(el => revealObserver.observe(el));

/* skill bars animate on view */
const skillCards = document.querySelectorAll('.skill-card');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.querySelectorAll('.skill-row').forEach(row => {
        row.querySelector('.skill-fill').style.width = row.dataset.level + '%';
      });
      skillObserver.unobserve(e.target);
    }
  });
}, {threshold:0.3});
skillCards.forEach(c => skillObserver.observe(c));

/* typing animation */
const roles = ["Aspiring Software Developer", "AI Enthusiast", "Prompt Engineer", "IT Student"];
const typedEl = document.getElementById('typed-role');
let rIndex = 0, cIndex = 0, deleting = false;
function typeLoop(){
  const current = roles[rIndex];
  cIndex += deleting ? -1 : 1;
  typedEl.innerHTML = current.substring(0, cIndex) + '<span class="cursor">&nbsp;</span>';
  let delay = deleting ? 35 : 65;
  if(!deleting && cIndex === current.length){ delay = 1400; deleting = true; }
  else if(deleting && cIndex === 0){ deleting = false; rIndex = (rIndex+1) % roles.length; delay = 300; }
  setTimeout(typeLoop, delay);
}
typeLoop();

/* contact form (demo only, no backend) */
document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  const toast = document.getElementById('form-toast');
  toast.classList.add('show');
  this.reset();
  setTimeout(() => toast.classList.remove('show'), 4000);
});

/* particle / neural network background */
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
function resizeCanvas(){
  canvas.width = canvas.parentElement.offsetWidth;
  canvas.height = canvas.parentElement.offsetHeight;
}
function initParticles(){
  const count = Math.min(70, Math.floor(canvas.width / 18));
  particles = Array.from({length:count}, () => ({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    vx: (Math.random()-0.5)*0.35,
    vy: (Math.random()-0.5)*0.35,
    r: Math.random()*1.8+0.8
  }));
}
function isDark(){ return body.getAttribute('data-theme') === 'dark'; }
function animateParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  const dotColor = isDark() ? 'rgba(166,137,232,0.85)' : 'rgba(111,90,220,0.55)';
  const lineColor = isDark() ? 'rgba(111,147,240,0.18)' : 'rgba(111,147,240,0.16)';
  particles.forEach(p => {
    p.x += p.vx; p.y += p.vy;
    if(p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if(p.y < 0 || p.y > canvas.height) p.vy *= -1;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
    ctx.fillStyle = dotColor;
    ctx.fill();
  });
  for(let i=0;i<particles.length;i++){
    for(let j=i+1;j<particles.length;j++){
      const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx*dx+dy*dy);
      if(dist < 120){
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animateParticles);
}
resizeCanvas(); initParticles(); animateParticles();
window.addEventListener('resize', () => { resizeCanvas(); initParticles(); });

/* resume download placeholder */
document.getElementById('resume-btn').addEventListener('click', function(e){
  e.preventDefault();
  alert('Add your resume PDF and link it here — e.g. href="assets/Suruthi_Sankar_Resume.pdf"');
});
