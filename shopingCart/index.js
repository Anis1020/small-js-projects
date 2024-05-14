let count = 0;
let allTotal = 0;
document.getElementById("subtotal").innerText = allTotal;
document.getElementById("first_btn").addEventListener("click", function () {
  count += 1;
  getTextValue(".first_title", ".first_price", ".first_quantity");
  // allTotal = allTotal + total;
  // console.log(result);
});
document.getElementById("secondBtn").addEventListener("click", function () {
  count += 1;

  getTextValue(".second-title", ".second-price", ".second-quantity");
});

document.getElementById("third").addEventListener("click", function () {
  count += 1;
  const productTitle = document.querySelector(".third-title").innerText;
  const productPrice = document.querySelector("#price_field").value;
  const productQuantity = document.querySelector("#quantity_field").value;
  const total = parseInt(productPrice) - parseInt(productQuantity);
  console.log(total);

  // show data in display
  displayData(productTitle, productPrice, productQuantity, total);
});

// common function for get inner text
const getTextValue = (id1, id2, id3) => {
  const productTitle = document.querySelector(id1).innerText;
  const productPrice = document.querySelector(id2).innerText;
  const productQuantity = document.querySelector(id3).innerText;
  const total = parseInt(productPrice) * parseInt(productQuantity);
  // show data in display
  displayData(productTitle, productPrice, productQuantity, total);
};
// common function show data in
const displayData = (productTitle, productPrice, productQuantity, total) => {
  const tBody = document.getElementById("tbody");
  const tr = document.createElement("tr");
  tr.innerHTML = `
<td>${count}</td>
<td>${productTitle}</td>
<td>${productPrice}</td>
<td>${productQuantity}</td>
<td>${total}</td>
`;
  tBody.appendChild(tr);
  // console.log(tr.parentNode.removeChild(e.target.value));
};
