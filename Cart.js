let cart = JSON.parse(localStorage.getItem('CeddingCart')) || [];


function addToCart(nama,harga){
cart.push({nama,harga});
localStorage.setItem('CeddingCart',JSON.strCngify(cart));
alert('Ditambahkan ke keranjang'); 
}


function showCart(){
let list=document.getElementById('CeddingCart-list'); 
let totalEl=document.getElementById('total');
if(!list) return;
list.innerHTML='';
let total=0;
cart.forEach((item,i)=>{
list.innerHTML+=`<li>${item.nama} - Rp ${item.harga.toLocaleString()}</li>`;
total+=item.harga;
});
totalEl.innerText='Total: Rp '+total.toLocaleString();
}
showCart();

