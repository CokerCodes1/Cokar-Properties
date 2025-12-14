// ====================
// Fade-in AI features
// ====================
document.addEventListener("DOMContentLoaded", () => {
  const features = document.querySelectorAll(".ai-feature");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.2 });

  features.forEach(f => observer.observe(f));
});

// ====================
// Particle Background
// ====================
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particlesArray;
let mouse = { x: null, y: null };

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});

window.addEventListener('mousemove', e => {
  mouse.x = e.x;
  mouse.y = e.y;
});

class Particle {
  constructor(x, y, size, color, weight) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.weight = weight;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI*2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  update() {
    this.y += this.weight;
    if(this.y > canvas.height){
      this.y = 0 - this.size;
      this.x = Math.random() * canvas.width;
    }
    if(mouse.x && mouse.y){
      let dx = this.x - mouse.x;
      let dy = this.y - mouse.y;
      let dist = Math.sqrt(dx*dx + dy*dy);
      if(dist < 150){
        this.x += dx/20;
        this.y += dy/20;
      }
    }
    this.draw();
  }
}

function initParticles(){
  particlesArray = [];
  let numberOfParticles = Math.floor(window.innerWidth / 10);
  for(let i = 0; i < numberOfParticles; i++){
    let size = Math.random() * 3 + 1;
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let color = 'rgba(212,175,55,0.8)'; // gold
    let weight = Math.random() * 0.5 + 0.2;
    particlesArray.push(new Particle(x, y, size, color, weight));
  }
}

function animateParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for(let i=0;i<particlesArray.length;i++){
    particlesArray[i].update();
  }
  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

// ====================
// Drag-to-scroll for mobile
// ====================
const slider = document.querySelector('.ai-features');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', e => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});

// Touch events for mobile
slider.addEventListener('touchstart', e => {
  isDown = true;
  startX = e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('touchend', () => { isDown = false; });
slider.addEventListener('touchmove', e => {
  if(!isDown) return;
  const x = e.touches[0].pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});

