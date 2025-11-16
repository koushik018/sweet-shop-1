const products = [
  { id:1, name:"Kaju Katli", price:450, img:"images/kaju.jpg", sold:10 },
  { id:2, name:"Gulab Jamun (6pcs)", price:120, img:"images/gulab.jpg", sold:25 },
  { id:3, name:"Rasgulla (6pcs)", price:130, img:"images/rasgulla.jpg", sold:18 }
];

const productsEl = document.querySelector('#products');
const cartCountEl = document.getElementById('cart-count');
let cartCount = 0;

function render(list){
  productsEl.innerHTML = '';
  list.forEach(p=>{
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p class="meta"><small>Popular: ${p.sold}</small><strong>₹${p.price}</strong></p>
      <div style="margin-top:auto;display:flex;gap:.5rem">
        <button class="btn add" data-id="${p.id}">Add</button>
        <button class="btn buy" data-id="${p.id}">Buy Now</button>
      </div>
    `;
    productsEl.appendChild(card);
  });
  attachHandlers();
}

function attachHandlers(){
  document.querySelectorAll('.btn.add').forEach(b=>{
    b.onclick = e=>{
      cartCount++; cartCountEl.textContent = cartCount;
      const id = +e.target.dataset.id;
      const p = products.find(x=>x.id===id); if(p) p.sold++;
    }
  });
  document.querySelectorAll('.btn.buy').forEach(b=>{
    b.onclick = e=>{
      alert('Demo: payment flow not connected yet. We will add Razorpay next.');
    }
  });
}

document.getElementById('year').textContent = new Date().getFullYear();
render(products);

// contact form mock
document.getElementById('contact-form').addEventListener('submit', e=>{
  e.preventDefault();
  alert('Thanks! We received your message.');
});
