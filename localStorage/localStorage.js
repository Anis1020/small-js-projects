const handleAddProduct = () => {
  const productField = document.getElementById("product");
  const quantityField = document.getElementById("quantity");

  const product = productField.value;
  const quantity = quantityField.value;
  productField.value = "";
  quantityField.value = "";
  displayProducts(product, quantity);
  setItemsInLocalStorage(product, quantity);
};
const displayProducts = (product, quantity) => {
  const ul = document.getElementById("productContainer");
  const li = document.createElement("li");
  li.innerText = `${product}: ${quantity}`;
  ul.appendChild(li);
};

const getItemsFromLocalStorage = () => {
  let cart = {};
  const cartItem = localStorage.getItem("cart");
  if (cartItem) {
    cart = JSON.parse(cartItem);
  }
  return cart;
};

const setItemsInLocalStorage = (product, quantity) => {
  const cart = getItemsFromLocalStorage();
  cart[product] = quantity;
  const prevItems = JSON.stringify(cart);
  localStorage.setItem("cart", prevItems);
};

const displayItemsFromLocalStorage = () => {
  const itemFromLocalStorage = getItemsFromLocalStorage();
  for (const item in itemFromLocalStorage) {
    const itemValue = itemFromLocalStorage[item];
    displayProducts(item, itemValue);
  }
};
displayItemsFromLocalStorage();
