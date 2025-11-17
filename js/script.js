// js/script.js — Srihithas Foods (responsive + smoother + cart panel)
// Full categorized product list (same as before)
const products = [
  /* SWEETS */
  { id:101, category:"Sweets", name:"Ariselu", price:400, unit:"kg", img:"https://picsum.photos/seed/ariselu/600/400", desc:"Ariselu - crunchy & sweet." },
  { id:102, category:"Sweets", name:"Neti Ariselu", price:500, unit:"kg", img:"https://picsum.photos/seed/netiariselu/600/400", desc:"New-style ariselu." },
  { id:103, category:"Sweets", name:"Kajji Kayal", price:350, unit:"kg", img:"https://picsum.photos/seed/kajjikayal/600/400", desc:"Crispy kajji kayal." },
  { id:104, category:"Sweets", name:"Laddu", price:400, unit:"kg", img:"https://picsum.photos/seed/laddu/600/400", desc:"Classic laddus made fresh." },
  { id:105, category:"Sweets", name:"Sunnunda (regular)", price:450, unit:"kg", img:"https://picsum.photos/seed/sunnunda/600/400", desc:"Sunnunda - soft and sweet." },
  { id:106, category:"Sweets", name:"Sunnunda (bellam)", price:500, unit:"kg", img:"https://picsum.photos/seed/sunnundabellam/600/400", desc:"Jaggery sunnunda." },
  { id:107, category:"Sweets", name:"Bellam Laddu", price:400, unit:"kg", img:"https://picsum.photos/seed/bellamladdu/600/400", desc:"Bellam (jaggery) laddu." },
  { id:108, category:"Sweets", name:"Mysore Pak", price:450, unit:"kg", img:"https://picsum.photos/seed/mysorepak/600/400", desc:"Ghee-rich Mysore Pak." },
  { id:109, category:"Sweets", name:"Milk Mysore Pak", price:900, unit:"kg", img:"https://picsum.photos/seed/milkmysore/600/400", desc:"Milk-based Mysore Pak." },
  { id:110, category:"Sweets", name:"Badushah", price:350, unit:"kg", img:"https://picsum.photos/seed/badushah/600/400", desc:"Flaky Badushah." },
  { id:111, category:"Sweets", name:"Kova Kajjikayalu", price:400, unit:"kg", img:"https://picsum.photos/seed/kovakajjikay/600/400", desc:"Kova-stuffed kajjikayalu." },
  { id:112, category:"Sweets", name:"Madatha Kaaja", price:350, unit:"kg", img:"https://picsum.photos/seed/madathakaaja/600/400", desc:"Layered fried kaaja." },
  { id:113, category:"Sweets", name:"Rava Laddu", price:300, unit:"kg", img:"https://picsum.photos/seed/ravaladdu/600/400", desc:"Rava laddus, soft & tasty." },
  { id:114, category:"Sweets", name:"Gavvalu", price:350, unit:"kg", img:"https://picsum.photos/seed/gavvalu/600/400", desc:"Crispy gavvalu." },
  { id:115, category:"Sweets", name:"Malai Kaaja", price:450, unit:"kg", img:"https://picsum.photos/seed/malaikaja/600/400", desc:"Creamy malai kaaja." },
  { id:116, category:"Sweets", name:"Palli Undal (Chikki)", price:500, unit:"kg", img:"https://picsum.photos/seed/palliundal/600/400", desc:"Peanut chikki (palli undal)." },
  { id:117, category:"Sweets", name:"Nuvvula Undalu", price:500, unit:"kg", img:"https://picsum.photos/seed/nuvvula/600/400", desc:"Sesame laddus (nuvvula undalu)." },
  { id:118, category:"Sweets", name:"Kaju Chikki", price:1500, unit:"kg", img:"https://picsum.photos/seed/kajuchikki/600/400", desc:"Premium kaju chikki." },
  { id:119, category:"Sweets", name:"Dry Fruit Laddu", price:1200, unit:"kg", img:"https://picsum.photos/seed/dryfruitladdu/600/400", desc:"Assorted dry-fruit laddus." },
  { id:120, category:"Sweets", name:"Bobbatlu", price:20, unit:"pc", img:"https://picsum.photos/seed/bobbatlu/600/400", desc:"Bobbatlu / Puran poli (per piece)." },
  { id:121, category:"Sweets", name:"Kaju Katli", price:450, unit:"kg", img:"https://picsum.photos/seed/kajukatli/600/400", desc:"Kaju Katli - premium cashew sweet." },
  { id:122, category:"Sweets", name:"Gulab Jamun (6pcs)", price:120, unit:"pack", img:"https://picsum.photos/seed/gulab/600/400", desc:"Gulab Jamun - 6 pieces." },
  { id:123, category:"Sweets", name:"Rasgulla (6pcs)", price:130, unit:"pack", img:"https://picsum.photos/seed/rasgulla/600/400", desc:"Rasgulla - 6 pieces." },
  { id:124, category:"Sweets", name:"Badam Halwa", price:0, unit:"kg", img:"https://picsum.photos/seed/badamhalwa/600/400", desc:"Badam Halwa — price on request." },

  /* FRIED */
  { id:201, category:"Fried", name:"Uppu Chakka", price:0, unit:"kg", img:"https://picsum.photos/seed/uppuchakka/600/400", desc:"Salted fried jackfruit - price on request." },
  { id:202, category:"Fried", name:"Manubolu", price:0, unit:"kg", img:"https://picsum.photos/seed/manubolu/600/400", desc:"Manubolu - price on request." },
  { id:203, category:"Fried", name:"Boondi", price:0, unit:"kg", img:"https://picsum.photos/seed/boondi/600/400", desc:"Boondi - price on request." },
  { id:204, category:"Fried", name:"Mixture", price:0, unit:"kg", img:"https://picsum.photos/seed/mixture/600/400", desc:"Mixture/kaju mixture - price on request." },
  { id:205, category:"Fried", name:"Kaju Mixture", price:0, unit:"kg", img:"https://picsum.photos/seed/kajumixture/600/400", desc:"Kaju mixture - price on request." },
  { id:206, category:"Fried", name:"Gavva (savoury)", price:350, unit:"kg", img:"https://picsum.photos/seed/gavva/600/400", desc:"Gavva - crispy snack." },
  { id:207, category:"Fried", name:"Masala Kaju (pudina/miriyal/mirchi)", price:0, unit:"kg", img:"https://picsum.photos/seed/masalakaju/600/400", desc:"Flavoured kaju - price on request." },

  /* PICKLES */
  { id:301, category:"Pickles", name:"Tomato Pickle", price:400, unit:"kg", img:"https://picsum.photos/seed/tomatopickle/600/400", desc:"Tomato pickle." },
  { id:302, category:"Pickles", name:"Lemon Pickle", price:400, unit:"kg", img:"https://picsum.photos/seed/lemonpickle/600/400", desc:"Lemon pickle." },
  { id:303, category:"Pickles", name:"Avakay (Mango)", price:500, unit:"kg", img:"https://picsum.photos/seed/avakay/600/400", desc:"Spicy mango avakaya." },
  { id:304, category:"Pickles", name:"Mango Tokku", price:500, unit:"kg", img:"https://picsum.photos/seed/mangotokku/600/400", desc:"Mango tokku pickle." },
  { id:305, category:"Pickles", name:"Chicken Pickle", price:1200, unit:"kg", img:"https://picsum.photos/seed/chickenpickle/600/400", desc:"Chicken pickle (non-veg)." },
  { id:306, category:"Pickles", name:"Mutton Pickle", price:2500, unit:"kg", img:"https://picsum.photos/seed/muttonpickle/600/400", desc:"Mutton pickle (non-veg)." },
  { id:307, category:"Pickles", name:"Prawn Pickle", price:2000, unit:"kg", img:"https://picsum.photos/seed/prawn/600/400", desc:"Prawn pickle (non-veg)." },
  { id:308, category:"Pickles", name:"Allam (Ginger)", price:400, unit:"kg", img:"https://picsum.photos/seed/allam/600/400", desc:"Ginger pickle/paste." },

  /* PODI */
  { id:401, category:"Podi", name:"Nuvvulu Podi", price:400, unit:"kg", img:"https://picsum.photos/seed/nuvvulu/600/400", desc:"Sesame podi." },
  { id:402, category:"Podi", name:"Palli Podi", price:400, unit:"kg", img:"https://picsum.photos/seed/pallipodi/600/400", desc:"Palli (peanut) podi." },
  { id:403, category:"Podi", name:"Putnala Pappu Podi", price:400, unit:"kg", img:"https://picsum.photos/seed/putnalapodi/600/400", desc:"Putnala pappu podi." },
  { id:404, category:"Podi", name:"Karvepak Podi", price:400, unit:"kg", img:"https://picsum.photos/seed/karvepak/600/400", desc:"Karvepak style podi." },
  { id:405, category:"Podi", name:"Kobbari Podi", price:400, unit:"kg", img:"https://picsum.photos/seed/kobbaripodi/600/400", desc:"Coconut podi." },
  { id:406, category:"Podi", name:"Minapa Pappu Podi", price:400, unit:"kg", img:"https://picsum.photos/seed/minapapodi/600/400", desc:"Minapa pappu podi." },
  { id:407, category:"Podi", name:"Pappula Podi", price:400, unit:"kg", img:"https://picsum.photos/seed/pappulapodi/600/400", desc:"Pappula (dal) podi." },

  /* OTHER */
  { id:501, category:"Other", name:"Kaju Katli (extra)", price:450, unit:"kg", img:"https://picsum.photos/seed/kajukatli2/600/400", desc:"Kaju Katli (another variant)." },
  { id:502, category:"Other", name:"Double Ka Meetha", price:120, unit:"kg", img:"https://picsum.photos/seed/doublekay/600/400", desc:"Double ka meetha - Hyderabadi style." },
  { id:503, category:"Other", name:"Mawa Burfi", price:200, unit:"kg", img:"https://picsum.photos/seed/mawa/600/400", desc:"Mawa burfi." }
];

// DOM refs
const categoryGrids = document.querySelectorAll('.products-grid');
const cartCountEl = document.getElementById('cart-count');
const cartBtn = document.getElementById('cart-btn');

// simple localStorage cart
function loadCart(){ try{ const r = localStorage.getItem('sf_cart'); return r ? JSON.parse(r) : {}; }catch(e){return{};} }
function saveCart(c){ localStorage.setItem('sf_cart', JSON.stringify(c)); }
function cartTotal(c){ return Object.values(c).reduce((s,v)=>s+v,0); }
function updateCartUI(){ if(cartCountEl) cartCountEl.textContent = cartTotal(loadCart()); renderCartPanel(); }

// render products (images lazy)
function renderByCategory(){
  const grids = Array.from(categoryGrids);
  grids.forEach(grid=>{
    const cat = grid.dataset.category;
    const list = products.filter(p=>p.category === cat);
    grid.innerHTML = '';
    if(list.length === 0){
      grid.innerHTML = `<p class="muted">No items in this category yet.</p>`;
    } else {
      list.forEach(p=>{
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
          <img src="${p.img}" alt="${p.name}" loading="lazy" />
          <h3>${p.name}</h3>
          <p class="desc">${p.desc || ''}</p>
          <p class="meta"><strong>${p.price > 0 ? '₹' + p.price + (p.unit ? ' / ' + p.unit : '') : 'Price on request'}</strong></p>
          <div class="actions">
            <button class="btn small add" data-id="${p.id}">Add</button>
            <button class="btn primary buy" data-id="${p.id}">Buy Now</button>
          </div>
        `;
        grid.appendChild(card);
      });
    }
  });
  attachHandlers();
}

/* ===== Nav hover preview logic ===== */
(function(){
  // create preview element once
  const preview = document.createElement('div');
  preview.className = 'nav-preview';
  preview.id = 'nav-preview';
  preview.innerHTML = '<div id="nav-preview-inner" style="display:flex;gap:.5rem"></div>';
  document.body.appendChild(preview);

  let showTimer = null;
  let hideTimer = null;

  function buildPreviewContent(category){
    const inner = document.getElementById('nav-preview-inner');
    inner.innerHTML = ''; // reset
    const list = products.filter(p => p.category && p.category.toLowerCase() === category.toLowerCase());
    // show up to 6 items
    const items = list.slice(0,6);
    items.forEach(p=>{
      const item = document.createElement('div');
      item.className = 'preview-item';
      item.innerHTML = `
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
        <div class="meta">
          <div class="name">${p.name}</div>
          <div class="price">${p.price > 0 ? '₹'+p.price + (p.unit ? ' / '+p.unit : '') : 'Price on request'}</div>
        </div>
      `;
      inner.appendChild(item);
    });
    if(items.length === 0){
      inner.innerHTML = `<div style="padding:.6rem;color:var(--muted)">No items available</div>`;
    }
  }

  // position preview centered under the link (keeps inside viewport)
  function positionPreview(anchorEl){
    const rect = anchorEl.getBoundingClientRect();
    const previewEl = preview;
    const previewWidth = Math.min(Math.max(260, rect.width * 1.8), 520);
    previewEl.style.width = previewWidth + 'px';
    const top = rect.bottom + window.scrollY + 8; // 8px gap
    let left = rect.left + window.scrollX + (rect.width / 2) - (previewWidth / 2);
    // clamp inside viewport
    const minLeft = 8;
    const maxLeft = window.innerWidth - previewWidth - 8;
    left = Math.max(minLeft, Math.min(left, maxLeft));
    previewEl.style.top = top + 'px';
    previewEl.style.left = left + 'px';
  }

  function showPreviewFor(anchorEl, category){
    clearTimeout(hideTimer);
    clearTimeout(showTimer);
    showTimer = setTimeout(()=>{
      buildPreviewContent(category);
      positionPreview(anchorEl);
      preview.classList.add('show');
    }, 120); // slight delay to avoid accidental hover
  }
  function hidePreviewSoon(){
    clearTimeout(showTimer);
    clearTimeout(hideTimer);
    hideTimer = setTimeout(()=> preview.classList.remove('show'), 180);
  }

  // attach handlers to nav links (header nav)
  function attachNavPreview(){
    const navLinks = Array.from(document.querySelectorAll('.main-nav a, .category-bar a'));
    navLinks.forEach(a=>{
      const href = a.getAttribute('href');
      if(!href || !href.startsWith('#')) return;
      const cat = href.replace('#','').trim();
      a.addEventListener('mouseenter', (e)=> showPreviewFor(a, cat) );
      a.addEventListener('focus', (e)=> showPreviewFor(a, cat) ); // keyboard support
      a.addEventListener('mouseleave', hidePreviewSoon );
      a.addEventListener('blur', hidePreviewSoon );
    });

    // keep preview open while hovered
    preview.addEventListener('mouseenter', ()=> clearTimeout(hideTimer) );
    preview.addEventListener('mouseleave', hidePreviewSoon );
  }

  // call after DOM ready (but safe if called later)
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', attachNavPreview);
  } else attachNavPreview();

})();


// handlers for add / buy
function attachHandlers(){
  document.querySelectorAll('.btn.add').forEach(b=>{
    b.onclick = e=>{
      const id = +e.target.dataset.id;
      const cart = loadCart(); cart[id] = (cart[id]||0) + 1; saveCart(cart);
      updateCartUI();
      e.target.textContent = 'Added'; setTimeout(()=> e.target.textContent = 'Add',900);
      // tiny pulse
      e.target.animate([{transform:'scale(1)'},{transform:'scale(0.96)'},{transform:'scale(1)'}],{duration:220});
    };
  });

  document.querySelectorAll('.btn.buy').forEach(b=>{
    b.onclick = e=>{
      const id = +e.target.dataset.id;
      const p = products.find(x=>x.id===id);
      if(!p) return alert('Product not found');
      let qty = prompt(`Buy ${p.name}\nEnter quantity (${p.unit || 'unit'}):`, "1");
      if(qty === null) return;
      qty = qty.trim();
      if(!qty || isNaN(qty) || Number(qty) <= 0) return alert('Enter valid qty');
      const cart = loadCart(); cart[id] = (cart[id]||0) + Number(qty); saveCart(cart);
      updateCartUI();
      // open cart panel for review
      openCartPanel();
    };
  });
}

// ----------------- SLIDE-IN CART PANEL -----------------
/* render cart into a right panel with qty controls and checkout simulation */
function ensureCartPanel(){
  if(document.querySelector('.cart-panel')) return;
  const panel = document.createElement('aside');
  panel.className = 'cart-panel';
  panel.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center">
      <h3>Your Cart</h3>
      <button id="cart-close" class="btn">Close</button>
    </div>
    <div class="cart-items" id="cart-items"></div>
    <div class="cart-footer" id="cart-footer">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.6rem">
        <strong>Total</strong><strong id="cart-total">₹0</strong>
      </div>
      <div style="display:flex;gap:.6rem">
        <button id="checkout-btn" class="btn primary">Checkout (Demo)</button>
        <button id="clear-cart" class="btn ghost">Clear</button>
      </div>
    </div>
  `;
  document.body.appendChild(panel);

  document.getElementById('cart-close').addEventListener('click', closeCartPanel);
  document.getElementById('clear-cart').addEventListener('click', ()=>{
    if(!confirm('Clear cart?')) return;
    saveCart({}); updateCartUI();
  });
  document.getElementById('checkout-btn').addEventListener('click', ()=>{
    const cart = loadCart();
    if(Object.keys(cart).length === 0) return alert('Cart empty');
    alert('Demo checkout complete. We will integrate Razorpay later.');
    saveCart({}); updateCartUI(); closeCartPanel();
  });
}

function renderCartPanel(){
  ensureCartPanel();
  const itemsWrap = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  if(!itemsWrap || !totalEl) return;
  const cart = loadCart();
  const ids = Object.keys(cart);
  if(ids.length === 0){
    itemsWrap.innerHTML = `<p class="empty">Your cart is empty.</p>`;
    totalEl.textContent = '₹0';
    return;
  }
  let grand = 0;
  itemsWrap.innerHTML = '';
  ids.forEach(id=>{
    const p = products.find(x=>x.id === Number(id));
    if(!p) return;
    const qty = cart[id];
    const lineTotal = (Number(p.price)||0) * qty;
    if(!isNaN(lineTotal)) grand += lineTotal;
    const row = document.createElement('div');
    row.className = 'cart-row';
    row.innerHTML = `
      <div style="flex:1">
        <strong>${p.name}</strong>
        <div class="muted" style="font-size:.9rem">${p.unit || ''} • ${p.price>0? '₹'+p.price : 'Price on request'}</div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:.4rem">
        <div class="qty">
          <button class="qty-minus" data-id="${id}">-</button>
          <span style="min-width:28px;text-align:center;display:inline-block">${qty}</span>
          <button class="qty-plus" data-id="${id}">+</button>
        </div>
        <div style="font-weight:700">${lineTotal ? '₹'+lineTotal : '—'}</div>
      </div>
    `;
    itemsWrap.appendChild(row);
  });

  // attach qty handlers
  itemsWrap.querySelectorAll('.qty-plus').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const id = +e.target.dataset.id;
      const cart = loadCart(); cart[id] = (cart[id]||0) + 1; saveCart(cart); renderCartPanel(); updateCartUI();
    });
  });
  itemsWrap.querySelectorAll('.qty-minus').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const id = +e.target.dataset.id;
      const cart = loadCart(); cart[id] = (cart[id]||0) - 1; if(cart[id] <= 0) delete cart[id]; saveCart(cart); renderCartPanel(); updateCartUI();
    });
  });

  totalEl.textContent = '₹' + grand;
}

function openCartPanel(){
  ensureCartPanel();
  const panel = document.querySelector('.cart-panel');
  panel.classList.add('open');
  // trap focus lightly
  panel.focus();
}
function closeCartPanel(){
  const panel = document.querySelector('.cart-panel');
  panel.classList.remove('open');
}

// attach cart button
function setupCartBtn(){
  if(!cartBtn) return;
  cartBtn.addEventListener('click', ()=>{
    openCartPanel();
  });
}

// Contact handler (same)
function setupContact(){
  const form = document.getElementById('contact-form');
  if(!form) return;
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const name = form.name?.value?.trim() || '';
    const phone = form.phone?.value?.trim() || '';
    if(!name || !phone) return alert('Please enter name and phone');
    alert('Thanks! We received your message. We will contact you soon.');
    form.reset();
  });
}

// init
document.addEventListener('DOMContentLoaded', ()=>{
  // build category bar (if missing) with contact link
  

  // render and wire up
  renderByCategory();
  updateCartUI();
  setupContact();
  setupCartBtn();

  // hamburger menu toggle (mobile)
  const hamburger = document.querySelector('.hamburger');
  if(hamburger){
    hamburger.addEventListener('click', ()=>{
      document.querySelector('.main-nav')?.classList.toggle('open');
      hamburger.classList.toggle('open');
    });
  }

  // basic close cart on ESC
  window.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') closeCartPanel();
  });
});

// ===== Improved UI helpers: robust smooth scroll, active highlight, header shrink =====
(function(){
  function getTopOffset(){
    const header = document.querySelector('.site-header');
    const cat = document.querySelector('.category-bar');
    let offset = 0;
    if(header) offset += header.getBoundingClientRect().height;
    if(cat) offset += cat.getBoundingClientRect().height;
    return Math.ceil(offset) + 8;
  }
  function safeScrollTo(selector){
    const target = document.querySelector(selector);
    if(!target) return;
    const top = Math.round(target.getBoundingClientRect().top + window.scrollY) - getTopOffset();
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  }
  function attachLinkHandlers(){
    document.querySelectorAll('.main-nav a, .category-bar a').forEach(a=>{
      a.removeEventListener('click', a.__smoothScrollHandler);
      const handler = function(ev){
        const href = this.getAttribute('href');
        if(!href || !href.startsWith('#')) return;
        ev.preventDefault();
        safeScrollTo(href);
      };
      a.addEventListener('click', handler);
      a.__smoothScrollHandler = handler;
    });
  }
  const navLinks = Array.from(document.querySelectorAll('.category-bar a, .main-nav a'));
  const sections = () => navLinks.map(l=>{
    const href = l.getAttribute('href'); return href && href.startsWith('#') ? document.querySelector(href) : null;
  });

  function onScroll(){
    if(window.scrollY > 30) document.querySelector('.site-header')?.classList.add('shrink'); else document.querySelector('.site-header')?.classList.remove('shrink');
    const offset = window.scrollY + getTopOffset() + 6;
    let found = false;
    const secs = sections();
    secs.forEach((sec, i)=>{
      if(!sec) return;
      const top = sec.offsetTop;
      const bottom = top + sec.offsetHeight;
      if(offset >= top && offset < bottom){
        navLinks.forEach(x=>x.classList.remove('active')); navLinks[i].classList.add('active'); found = true;
      }
    });
    if(!found) navLinks.forEach(x=>x.classList.remove('active'));
  }

  window.addEventListener('scroll', onScroll);
  window.addEventListener('resize', ()=> setTimeout(onScroll, 120));
  setTimeout(()=>{ attachLinkHandlers(); onScroll(); }, 300);
})();

// ===== WhatsApp order button logic (uses encodeURIComponent) =====
(function(){
  const waBtn = document.getElementById('whatsapp-btn');
  if(!waBtn) return;
  const PHONE = '919676401967'; // update if needed
  function cartToMessage(){
    const cart = loadCart();
    const itemLines = Object.keys(cart).map(id=>{
      const p = products.find(x=>x.id === Number(id));
      if(!p) return null;
      const qty = cart[id];
      const unit = p.unit ? ` ${p.unit}` : '';
      const price = p.price && p.price>0 ? ` — ₹${(Number(p.price)||0) * qty}` : '';
      return `${p.name} x ${qty}${unit}${price}`;
    }).filter(Boolean);
    if(itemLines.length === 0){
      const plain = `Hi Srihithas Foods, I want to place an order.\n(Please specify items and quantities)`;
      return encodeURIComponent(plain);
    }
    const body = [
      `Hi Srihithas Foods,`,
      `I would like to order from your store:`,
      ...itemLines,
      `\nPlease confirm availability and delivery details.`,
      `\nName: `,
      `Phone: `
    ].join('\n');
    return encodeURIComponent(body);
  }
  waBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const msg = cartToMessage();
    const url = `https://wa.me/${PHONE}?text=${msg}`;
    window.open(url, '_blank');
  });
})();
