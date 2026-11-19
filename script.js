const box = document.getElementById('bubbles');

function makeBubble() {
  const b = document.createElement('div');
  b.className = 'bubble';

  const size = 8 + Math.random() * 30;           
  b.style.width = size + 'px';
  b.style.height = size + 'px';
  b.style.left = Math.random() * 100 + 'vw';   
  b.style.animationDuration = (9 + Math.random() * 10) + 's';  

  box.appendChild(b);

  b.addEventListener('animationend', () => b.remove());
}

for (let i = 0; i < 14; i++) {
  setTimeout(makeBubble, i * 400);
}

setInterval(makeBubble, 700);