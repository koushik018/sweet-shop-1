console.log('script.js loaded');
document.addEventListener('DOMContentLoaded', ()=>{
  const p = document.createElement('p');
  p.textContent = 'JS is working — ' + new Date().toLocaleTimeString();
  document.body.appendChild(p);
});
