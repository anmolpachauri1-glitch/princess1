document.addEventListener('DOMContentLoaded', ()=>{
  const revealBtn = document.getElementById('revealBtn');
  const giftCard = document.getElementById('giftCard');
  // (music removed) 

  revealBtn.addEventListener('click', ()=>{
    const opened = giftCard.classList.toggle('show');
    giftCard.setAttribute('aria-hidden', opened ? 'false' : 'true');
    revealBtn.textContent = opened ? 'Close' : 'Open Your Surprise';
    spawnSparkles();
    if(opened){
      // small delay so card is visibly opened before pop
      setTimeout(()=>{ popHearts(); }, 250);
    }
  });

  // music controls removed

  function spawnSparkles(){
    const container = document.querySelector('.sparkles');
    container.innerHTML = '';
    for(let i=0;i<18;i++){
      const el = document.createElement('div');
      el.className = 'sparkle';
      const left = Math.random()*100;
      const top = 40 + Math.random()*60;
      el.style.left = left + '%';
      el.style.top = top + '%';
      const delay = Math.random()*0.6;
      const duration = 0.9 + Math.random()*1.1;
      el.style.animation = `twinkle ${duration}s ease ${delay}s forwards`;
      container.appendChild(el);
    }
  }

  // party popper: spawn hearts
  function popHearts(){
    const popper = document.querySelector('.popper');
    if(!popper) return;
    popper.innerHTML = '';
    const colors = ['#ff5aa2','#ff8ccf','#ffd6ea','#ffb3d6','#fff176'];
    const count = 16;
    for(let i=0;i<count;i++){
      const h = document.createElement('div');
      h.className = 'heart';
      const size = 12 + Math.round(Math.random()*12);
      h.style.width = size + 'px';
      h.style.height = size + 'px';
      // heart shape via background SVG data URL
      const color = colors[Math.floor(Math.random()*colors.length)];
      const svg = encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='${color}' d='M12 21s-7-4.35-9-7.17C-1 9.5 4 .5 12 6c8-5.5 13 3.5 9 7.83C19 16.65 12 21 12 21z'/></svg>`);
      h.style.backgroundImage = `url("data:image/svg+xml;utf8,${svg}")`;
      h.style.backgroundSize = 'cover';
      const left = 50 + (Math.random()*120 - 60);
      h.style.left = left + '%';
      const delay = Math.random()*0.18;
      const dur = 0.9 + Math.random()*1.1;
      h.style.animation = `popBurst ${dur}s cubic-bezier(.2,.8,.2,1) ${delay}s forwards`;
      popper.appendChild(h);
      // remove after animation
      setTimeout(()=>{ if(h.parentNode) h.parentNode.removeChild(h); }, (dur+delay)*1000 + 100);
    }
  }

});
