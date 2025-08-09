// Custom gold ring cursor (basic)
if (!document.getElementById('cursor')) {
  const cursor = document.createElement('div');
  cursor.id = 'cursor';
  document.body.appendChild(cursor);

  cursor.style.position = 'fixed';
  cursor.style.top = '0';
  cursor.style.left = '0';
  cursor.style.width = '24px';
  cursor.style.height = '24px';
  cursor.style.border = '2px solid #D4AF37';
  cursor.style.borderRadius = '50%';
  cursor.style.pointerEvents = 'none';
  cursor.style.mixBlendMode = 'difference';
  cursor.style.transition = 'transform 0.15s ease, box-shadow 0.25s ease';
  cursor.style.transform = 'translate(-50%, -50%) scale(1)';
  cursor.style.zIndex = '9999';
  cursor.style.willChange = 'transform, box-shadow';
}

const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', e => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});

// Button hover effect
const button = document.querySelector('.cta-button');
if (button) {
  button.addEventListener('mouseenter', () => {
    cursor.style.boxShadow = '0 0 8px 4px #f3d36a';
    cursor.style.transform = 'translate(-50%, -50%) scale(1.4)';
  });
  button.addEventListener('mouseleave', () => {
    cursor.style.boxShadow = '';
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
  });
}

// Highlight active nav link on scroll
const navLinks = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + window.innerHeight / 3;
  navLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (section &&
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Cursor hover effect for interactive elements
document.addEventListener('mouseover', e => {
  if (e.target.matches('a, button, .project-card')) {
    cursor.classList.add('hovered');
  }
});
document.addEventListener('mouseout', e => {
  if (e.target.matches('a, button, .project-card')) {
    cursor.classList.remove('hovered');
  }
});
