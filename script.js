let products = [
  {
    name: "VR Model",
    headline: "Future Cenima",
    price: "130000",
    image:
      "https://plus.unsplash.com/premium_photo-1675257062985-323b7ea418e5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Dron",
    headline: "Eye with Wibgs",
    price: "150000",
    image:
      "https://images.unsplash.com/photo-1612690669207-fed642192c40?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "AI Procesor",
    headline: "Revolation of modern Technology",
    price: "200000",
    image:
      "https://plus.unsplash.com/premium_photo-1683120966127-14162cdd0935?q=80&w=1563&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "VR 3D",
    headline: "3D repairing System",
    price: "200000",
    image:
      "https://plus.unsplash.com/premium_photo-1661727547850-3d7c020a64a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Smart Watch",
    headline: "Be Smart",
    price: "200000",
    image:
      "https://images.unsplash.com/photo-1434494571168-ab162bce2813?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Smart Navigation System",
    headline: "Find your on way",
    price: "200000",
    image:
      "https://images.unsplash.com/photo-1628655207872-76a915ecc5e3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Auto Manufacturing",
    headline: "Auto Manufacturing",
    price: "200000",
    image:
      "https://plus.unsplash.com/premium_photo-1682145373962-4d76b19410ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
let cart = [];

let popularProduct = [
  {
    name: "Spinner",
    headline: "infinite Spinning",
    price: "200000",
    image:
      "https://images.pexels.com/photos/422290/pexels-photo-422290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Camera leanse",
    headline: "Clear vision",
    price: "200000",
    image:
      "https://images.pexels.com/photos/1058078/pexels-photo-1058078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Headphone",
    headline: "listen clearlly",
    price: "200000",
    image:
      "https://images.pexels.com/photos/7772549/pexels-photo-7772549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

function addPrduct() {
  let clutter = "";
  products.forEach(function (product, index) {
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
    <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
    <img class="w-full h-full object-cover" src="${product.image}" />
    </div>
    <div class="data w-full px-2 py-5">
      <h1 class="font-semibold text-xl leading-none tracking-tight">
        ${product.name}
      </h1>
      <div class="flex justify-between w-full items-center mt-2">
        <div class="w-1/2">
          <h3 class="font-semibold opacity-20">${product.headline}</h3>
          <h4 class="font-semibold mt-2">&#8383; ${product.price}</h4>
        </div>
        <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400">
          <i data-index="${index}" class="add ri-add-line"></i>
        </button>
      </div>
    </div>
  </div>`;
  });
  document.querySelector(".products").innerHTML = clutter;
}

function addPopularProduct() {
  let clutter = "";
  popularProduct.forEach(function (product) {
    clutter += `<div
    class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
    <div
      class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
      <img
        class="w-full h-full object-cover"
        src="${product.image}"
        alt=""
      />
    </div>
    <div class="data py-2 w-full">
      <h1 class="leading-none font-semibold">${product.name}</h1>
      <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">
        ${product.headline}
      </h4>
      <h4 class="mt-3 font-semibold text-zinc-500">&#8383; ${product.price}</h4>
    </div>
  </div>`;
  });
  document.querySelector(".populars").innerHTML = clutter;
}

function addToCart() {
  document
    .querySelector(".products")
    .addEventListener("click", function (details) {
      if (details.target.classList.contains("add")) {
        cart.push(products[details.target.dataset.index]);
      }
    });
}
function showCart() {
  document.querySelector(".carticon").addEventListener("click", function () {
    document.querySelector(".cartexpnd").style.display = "block";

    let clutter = "";
    cart.forEach(function (prod, index) {
      clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
      <div class="w-10 h-10 flex-shrink-0 rounded-lg bg-red-500">
        <img class="w-10 h-10 flex-shrink-0 rounded-lg bg-red-500" src="${prod.image}">
        </div>
        <div>
      <h3 class="font-semibold">${prod.name}</h3>
      <h5 class="text-sm font-semibold opacity-80">${prod.price}</h5>
      </div>
      </div>
      `;
    });
    document.querySelector(".cartexpnd").innerHTML = clutter;
  });
}
showCart();
addToCart();
addPopularProduct();
addPrduct();
