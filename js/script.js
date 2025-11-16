// script.js - categorized listing + simple cart (localStorage)
// products grouped by "category"
const products = [
  // Sweets
  { id:101, category:"Sweets", name:"Kaju Katli", price:450, unit:"kg", img:"https://picsum.photos/seed/kajukatli/600/400", desc:"Premium Kaju Katli." },
  { id:102, category:"Sweets", name:"Gulab Jamun (6pcs)", price:120, unit:"pack", img:"https://picsum.photos/seed/gulab/600/400", desc:"Soft syrupy gulab jamun." },
  { id:103, category:"Sweets", name:"Rasgulla (6pcs)", price:130, unit:"pack", img:"https://picsum.photos/seed/rasgulla/600/400", desc:"Spongy rasgulla." },
  { id:104, category:"Sweets", name:"Rava Laddu", price:300, unit:"kg", img:"https://picsum.photos/seed/ravaladdu/600/400", desc:"Rava laddus." },
  { id:105, category:"Sweets", name:"Mysore Pak", price:450, unit:"kg", img:"https://picsum.photos/seed/mysorepak/600/400", desc:"Ghee-rich mysore pak." },

  // Pickles
  { id:201, category:"Pickles", name:"Tomato Pickle", price:400, unit:"kg", img:"https://picsum.photos/seed/tomatopickle/600/400", desc:"Tangy tomato pickle." },
  { id:202, category:"Pickles", name:"Lemon Pickle", price:400, unit:"kg", img:"https://picsum.photos/seed/lemonpickle/600/400", desc:"Classic lemon pickle." },
  { id:203, category:"Pickles", name:"Avakay (Mango)", price:500, unit:"kg", img:"https://picsum.photos/seed/avakay/600/400", desc:"Spicy mango avakaya." },
  { id:204, category:"Pickles", name:"Prawn Pickle", price:2000, unit:"kg", img:"https://picsum.photos/seed/prawn/600/400", desc:"Prawn pickle (non-veg)." },

  // Fried / Savouries
  { id:301, category:"Fried", name:"Gavvalu", price:350, unit:"kg", img:"https://picsum.photos/seed/gavvalu/600/400", desc:"Crispy gavvalu." },
  { id:302, category:"Fried", name:"Boondi", price:0, unit:"kg", img:"https://picsum.photos/seed/boondi/600/400", desc:"Boondi — price on request." },
  { id:303, category:"Fried", name:"Palli Undal (Chikki)", price:500, unit:"kg", img:"https://picsum.photos/seed/palliundal/600/400", desc:"Peanut chikki." },

  // Podi / Powders
  { id:401, category:"Podi", name:"Nuvvulu Podi", price:0, unit:"kg", img:"https://picsum.photos/seed/nuvvulu/600/400", desc:"Sesame podi — price on request." },
  { id:402, category:"Podi", name:"Karvepak Podi", price:0, unit:"kg", img:"https://picsum.photos/seed/karvepak/600/400", desc:"Spice mixes / podis." },
  { id:403, category:"Podi", name:"Allam (Ginger) Paste", price:400, unit:"kg", img:"https://picsum.photos/seed/allam/600/400", desc:"Ginger paste/pickle." }
];

// --- DOM refs
const categoryGrids = document.querySelectorAll('.products-grid');
const cartCountEl = document.getElementById('cart-count');
const cartBtn = document.getElementById('cart-btn');

// localStorage cart: { id: qty, ... }
function loadCart(){ try{ const r = localStorage.getItem('sf_cart'); return r ? JSON.parse(r) : {}; }catch(e){return{};} }
function saveCart(c){ localStorage.setItem('sf_cart', JSON.stringify(c)); }
function cartTotal(c){ return Object.values(c).reduce((s,v)=>s+v,0); }
function updateCartUI(){ cartCountEl.textContent = cartTotal(loadCart()); }

// render per category
function renderByCategory(){
  const categories = Array.from(categoryGrids).map(g => g.dataset.category);
  categories.forEach(cat=>{
    const el = document.querySelector(`.products-grid[data-category="${cat}"]`);
    if(!el) return;
    el.innerHTML = '';
    const list = products.filter(p=>p.category === cat);
    if(list.length === 0){
      el.innerHTML = `<p class="muted">No items in this category yet.</p>`;
      return;
    }
    list.forEach(p=>{
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `
        <img src="${p.img}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p class="desc">${p.desc || ''}</p>
        <p class="meta"><strong>${p.price>0 ? '₹'+p.price + (p.unit ? ' / '+p.unit : '') : 'Price on request'}</strong></p>
        <div class="actions">
          <button class="btn add" data-id="${p.id}">Add</button>
          <button class="btn buy" data-id="${p.id}">Buy Now</button>
        </div>
      `;
      el.appendChild(card);
    });
  });
  attachHandlers();
}

// attach handlers
function attachHandlers(){
  document.querySelectorAll('.btn.add').forEach(b=>{
    b.onclick = e=>{
      const id = +e.target.dataset.id;
      const cart = loadCart();
      cart[id] = (cart[id]||0) + 1;
      saveCart(cart);
      updateCartUI();
      e.target.textContent = 'Added'; setTimeout(()=> e.target.textContent = 'Add',900);
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
      const total = (Number(p.price)||0) * Number(qty);
      const ok = confirm(`Proceed to pay ₹${total} for ${qty} ${p.unit} of ${p.name}? (Demo)`);
      if(ok){
        alert('Demo payment successful (simulation). We will integrate real gateway later.');
        const cart = loadCart(); cart[id] = (cart[id]||0) + Number(qty); saveCart(cart); updateCartUI();
      }
    };
  });
}

// contact form
function setupContact(){
  const form = document.getElementById('contact-form');
  if(!form) return;
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const name = form.name?.value?.trim() || '';
    const phone = form.phone?.value?.trim() || '';
    if(!name || !phone) return alert('Please enter name and phone');
    alert('Thanks! We received your message.');
    form.reset();
  });
}

// cart quick view
function setupCartBtn(){
  if(!cartBtn) return;
  cartBtn.addEventListener('click', ()=>{
    const cart = loadCart();
    const lines = Object.keys(cart).map(id=>{
      const p = products.find(x=>x.id === Number(id)); if(!p) return null;
      const qty = cart[id]; const total = (Number(p.price)||0)*qty;
      return `${p.name} — ${qty} ${p.unit || ''} — ₹${total || '—'}`;
    }).filter(Boolean);
    if(lines.length === 0) return alert('Cart empty');
    alert('Cart:\n\n'+lines.join('\n')+`\n\nTotal items: ${cartTotal(cart)}`);
  });
}

// init
document.addEventListener('DOMContentLoaded', ()=>{
  const yearEl = document.getElementById('year'); if(yearEl) yearEl.textContent = new Date().getFullYear();
  renderByCategory();
  updateCartUI();
  setupContact();
  setupCartBtn();
});
