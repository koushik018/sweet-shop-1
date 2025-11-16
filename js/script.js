// js/script.js — Srihithas Foods (FULL categorized product list)
// - Podi items set to 400/kg as requested
// - Items with no price left as price: 0 (Price on request)
// - Images use picsum placeholders for quick deployment

const products = [
  // -------------------------
  // SWEETS
  // -------------------------
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

  // -------------------------
  // FRIED / SAVOURIES
  // -------------------------
  { id:201, category:"Fried", name:"Uppu Chakka", price:0, unit:"kg", img:"https://picsum.photos/seed/uppuchakka/600/400", desc:"Salted fried jackfruit - price on request." },
  { id:202, category:"Fried", name:"Manubolu", price:0, unit:"kg", img:"https://picsum.photos/seed/manubolu/600/400", desc:"Manubolu - price on request." },
  { id:203, category:"Fried", name:"Boondi", price:0, unit:"kg", img:"https://picsum.photos/seed/boondi/600/400", desc:"Boondi - price on request." },
  { id:204, category:"Fried", name:"Mixture", price:0, unit:"kg", img:"https://picsum.photos/seed/mixture/600/400", desc:"Mixture/kaju mixture - price on request." },
  { id:205, category:"Fried", name:"Kaju Mixture", price:0, unit:"kg", img:"https://picsum.photos/seed/kajumixture/600/400", desc:"Kaju mixture - price on request." },
  { id:206, category:"Fried", name:"Gavva (savoury)", price:350, unit:"kg", img:"https://picsum.photos/seed/gavva/600/400", desc:"Gavva - crispy snack." },
  { id:207, category:"Fried", name:"Masala Kaju (pudina/miriyal/mirchi)", price:0, unit:"kg", img:"https://picsum.photos/seed/masalakaju/600/400", desc:"Flavoured kaju - price on request." },

  // -------------------------
  // PICKLES
  // -------------------------
  { id:301, category:"Pickles", name:"Tomato Pickle", price:400, unit:"kg", img:"https://picsum.photos/seed/tomatopickle/600/400", desc:"Tomato pickle." },
  { id:302, category:"Pickles", name:"Lemon Pickle", price:400, unit:"kg", img:"https://picsum.photos/seed/lemonpickle/600/400", desc:"Lemon pickle." },
  { id:303, category:"Pickles", name:"Avakay (Mango)", price:500, unit:"kg", img:"https://picsum.photos/seed/avakay/600/400", desc:"Spicy mango avakaya." },
  { id:304, category:"Pickles", name:"Mango Tokku", price:500, unit:"kg", img:"https://picsum.photos/seed/mangotokku/600/400", desc:"Mango tokku pickle." },
  { id:305, category:"Pickles", name:"Chicken Pickle", price:1200, unit:"kg", img:"https://picsum.photos/seed/chickenpickle/600/400", desc:"Chicken pickle (non-veg)." },
  { id:306, category:"Pickles", name:"Mutton Pickle", price:2500, unit:"kg", img:"https://picsum.photos/seed/muttonpickle/600/400", desc:"Mutton pickle (non-veg)." },
  { id:307, category:"Pickles", name:"Prawn Pickle", price:2000, unit:"kg", img:"https://picsum.photos/seed/prawn/600/400", desc:"Prawn pickle (non-veg)." },
  { id:308, category:"Pickles", name:"Allam (Ginger)", price:400, unit:"kg", img:"https://picsum.photos/seed/allam/600/400", desc:"Ginger pickle/paste." },

  // -------------------------
  // PODI (set to 400/kg)
  // -------------------------
  { id:401, category:"Podi", name:"Nuvvulu Podi", price:400, unit:"kg", img:"https://picsum.photos/seed/nuvvulu/600/400", desc:"Sesame podi." },
  { id:402, category:"Podi", name:"Palli Podi", price:400, unit:"kg", img:"https://picsum.photos/seed/pallipodi/600/400", desc:"Palli (peanut) podi." },
  { id:403, category:"Podi", name:"Putnala Pappu Podi", price:400, unit:"kg", img:"https://picsum.photos/seed/putnalapodi/600/400", desc:"Putnala pappu podi." },
  { id:404, category:"Podi", name:"Karvepak Podi", price:400, unit:"kg", img:"https://picsum.photos/seed/karvepak/600/400", desc:"Karvepak style podi." },
  { id:405, category:"Podi", name:"Kobbari Podi", price:400, unit:"kg", img:"https://picsum.photos/seed/kobbaripodi/600/400", desc:"Coconut podi." },
  { id:406, category:"Podi", name:"Minapa Pappu Podi", price:400, unit:"kg", img:"https://picsum.photos/seed/minapapodi/600/400", desc:"Minapa pappu podi." },
  { id:407, category:"Podi", name:"Pappula Podi", price:400, unit:"kg", img:"https://picsum.photos/seed/pappulapodi/600/400", desc:"Pappula (dal) podi." },

  // -------------------------
  // CHIKKI / OTHER / MISC
  // -------------------------
  { id:501, category:"Other", name:"Kaju Katli (extra)", price:450, unit:"kg", img:"https://picsum.photos/seed/kajukatli2/600/400", desc:"Kaju Katli (another variant)." },
  { id:502, category:"Other", name:"Double Ka Meetha", price:120, unit:"kg", img:"https://picsum.photos/seed/doublekay/600/400", desc:"Double ka meetha - Hyderabadi style." },
  { id:503, category:"Other", name:"Mawa Burfi", price:200, unit:"kg", img:"https://picsum.photos/seed/mawa/600/400", desc:"Mawa burfi." }
];

// -------------------------
// UI + Cart logic (same pattern as before)
// -------------------------
const categoryGrids = document.querySelectorAll('.products-grid');
const cartCountEl = document.getElementById('cart-count');
const cartBtn = document.getElementById('cart-btn');

function loadCart(){ try{ const r = localStorage.getItem('sf_cart'); return r ? JSON.parse(r) : {}; }catch(e){return{};} }
function saveCart(c){ localStorage.setItem('sf_cart', JSON.stringify(c)); }
function cartTotal(c){ return Object.values(c).reduce((s,v)=>s+v,0); }
function updateCartUI(){ if(cartCountEl) cartCountEl.textContent = cartTotal(loadCart()); }

// Render items into each category grid
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
          <img src="${p.img}" alt="${p.name}" />
          <h3>${p.name}</h3>
          <p class="desc">${p.desc || ''}</p>
          <p class="meta"><strong>${p.price > 0 ? '₹' + p.price + (p.unit ? ' / ' + p.unit : '') : 'Price on request'}</strong></p>
          <div class="actions">
            <button class="btn add" data-id="${p.id}">Add</button>
            <button class="btn buy" data-id="${p.id}">Buy Now</button>
          </div>
        `;
        grid.appendChild(card);
      });
    }
  });
  attachHandlers();
}

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
        alert('Demo payment successful (simulation). Real gateway integration will come next.');
        const cart = loadCart(); cart[id] = (cart[id]||0) + Number(qty); saveCart(cart); updateCartUI();
      }
    };
  });
}

// Contact form simple handler
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

// Cart quick view
function setupCartBtn(){
  if(!cartBtn) return;
  cartBtn.addEventListener('click', ()=>{
    const cart = loadCart();
    const lines = Object.keys(cart).map(id=>{
      const p = products.find(x=>x.id === Number(id)); if(!p) return null;
      const qty = cart[id]; const total = (Number(p.price)||0) * qty;
      return `${p.name} — ${qty} ${p.unit || ''} — ${total ? '₹'+total : 'Price on request'}`;
    }).filter(Boolean);
    if(lines.length === 0) return alert('Cart empty');
    alert('Cart:\n\n'+lines.join('\n')+`\n\nTotal items: ${cartTotal(cart)}`);
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', ()=>{
  const yearEl = document.getElementById('year'); if(yearEl) yearEl.textContent = new Date().getFullYear();
  renderByCategory();
  updateCartUI();
  setupContact();
  setupCartBtn();
});
