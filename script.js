// =========================
// SAMPLE PRODUCTS
// =========================

let products = JSON.parse(localStorage.getItem("products")) || [
  {
    name: "Coca Cola",
    barcode: "890100001",
    price: 40,
    stock: 50,
    category: "Beverages"
  },
  {
    name: "Rice Bag",
    barcode: "890100002",
    price: 1200,
    stock: 20,
    category: "Groceries"
  },
  {
    name: "Milk Packet",
    barcode: "890100003",
    price: 32,
    stock: 80,
    category: "Dairy"
  },
  {
    name: "Chocolate",
    barcode: "890100004",
    price: 25,
    stock: 100,
    category: "Snacks"
  }
];

let cart = [];
let salesHistory = JSON.parse(localStorage.getItem("salesHistory")) || [];

const productsList = document.getElementById("productsList");
const cartBody = document.getElementById("cartBody");
const subtotalEl = document.getElementById("subtotal");
const taxEl = document.getElementById("tax");
const grandTotalEl = document.getElementById("grandTotal");
const barcodeInput = document.getElementById("barcodeInput");
const scanSound = document.getElementById("scanSound");

// =========================
// PAGE NAVIGATION
// =========================

const navButtons = document.querySelectorAll(".nav-btn");
const pages = document.querySelectorAll(".page");

navButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    navButtons.forEach(b => b.classList.remove("active"));
    pages.forEach(p => p.classList.remove("active-page"));

    btn.classList.add("active");

    document
      .getElementById(btn.dataset.page)
      .classList.add("active-page");
  });
});

// =========================
// THEME TOGGLE
// =========================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  const html = document.documentElement;

  if (html.dataset.theme === "dark") {
    html.dataset.theme = "light";
  } else {
    html.dataset.theme = "dark";
  }
});

// =========================
// RENDER PRODUCTS
// =========================

function renderProducts() {

  productsList.innerHTML = "";

  products.forEach(product => {

    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <p>${product.category}</p>
      <p>Stock: ${product.stock}</p>
    `;

    card.addEventListener("click", () => addToCart(product.barcode));

    productsList.appendChild(card);
  });

  renderProductsTable();
}

// =========================
// ADD TO CART
// =========================

function addToCart(barcode) {

  const product = products.find(p => p.barcode === barcode);

  if (!product) {
    alert("Product not found");
    return;
  }

  scanSound.play();

  const existing = cart.find(item => item.barcode === barcode);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      ...product,
      qty: 1
    });
  }

  renderCart();
}

// =========================
// RENDER CART
// =========================

function renderCart() {

  cartBody.innerHTML = "";

  let subtotal = 0;

  cart.forEach((item, index) => {

    const total = item.price * item.qty;
    subtotal += total;

    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${item.name}</td>

      <td>
        <div class="qty-controls">
          <button onclick="changeQty(${index}, -1)">-</button>
          ${item.qty}
          <button onclick="changeQty(${index}, 1)">+</button>
        </div>
      </td>

      <td>₹${item.price}</td>
      <td>₹${total}</td>

      <td>
        <button class="danger" onclick="removeItem(${index})">
          X
        </button>
      </td>
    `;

    cartBody.appendChild(tr);
  });

  const tax = subtotal * 0.05;
  const discount = Number(document.getElementById("discount").value);
  const grandTotal = subtotal + tax - discount;

  subtotalEl.innerText = `₹${subtotal.toFixed(2)}`;
  taxEl.innerText = `₹${tax.toFixed(2)}`;
  grandTotalEl.innerText = `₹${grandTotal.toFixed(2)}`;
}

// =========================
// CHANGE QUANTITY
// =========================

function changeQty(index, amount) {

  cart[index].qty += amount;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  renderCart();
}

// =========================
// REMOVE ITEM
// =========================

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

// =========================
// BARCODE INPUT
// =========================

barcodeInput.addEventListener("keypress", e => {

  if (e.key === "Enter") {
    addToCart(barcodeInput.value.trim());
    barcodeInput.value = "";
  }
});

// =========================
// CLEAR CART
// =========================

document.getElementById("clearCartBtn")
.addEventListener("click", () => {
  cart = [];
  renderCart();
});

// =========================
// SEARCH PRODUCTS
// =========================

document.getElementById("searchProduct")
.addEventListener("input", e => {

  const value = e.target.value.toLowerCase();

  const cards = document.querySelectorAll(".product-card");

  cards.forEach(card => {

    if (card.innerText.toLowerCase().includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// =========================
// INITIALIZE
// =========================

document.getElementById("invoiceNo")
.innerText = `Invoice #${Date.now()}`;

document.getElementById("discount")
.addEventListener("input", renderCart);

renderProducts();
renderCart();
