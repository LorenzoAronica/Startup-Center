(function(){
  'use strict';
  const toggle=document.querySelector('.menu-toggle');
  const nav=document.getElementById('site-nav');
  if(toggle&&nav){
    toggle.addEventListener('click',()=>{
      const open=nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded',String(open));
      toggle.setAttribute('aria-label',open?'Chiudi menu':'Apri menu');
    });
    document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}});
  }
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=String(new Date().getFullYear()));
  const message=document.querySelector('textarea[name="motivazione"]');
  const count=document.getElementById('char-count');
  if(message&&count){message.addEventListener('input',()=>count.textContent=message.value.length+' / 1200')}
})();
