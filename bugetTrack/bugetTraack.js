document.querySelector(".add_chocolate").addEventListener("click", function () {
  const chocolateField = document.getElementById("chocolate_field").value;
  let chocolateCalculation = chocolateField * 50;
  const chocolatePrice = (document.getElementById("chocolate").innerText =
    chocolateCalculation);
  console.log(chocolatePrice);
  addAll();
});
document.querySelector(".add_rose").addEventListener("click", function () {
  const chocolateField = document.getElementById("rose_field").value;
  let chocolateCalculation = chocolateField * 50;
  const chocolatePrice = (document.getElementById("rose").innerText =
    chocolateCalculation);
  console.log(chocolatePrice);
  addAll();
});
document.querySelector(".add_diary").addEventListener("click", function () {
  const chocolateField = document.getElementById("diary_field").value;
  let chocolateCalculation = chocolateField * 50;
  const chocolatePrice = (document.getElementById("diary").innerText =
    chocolateCalculation);
  console.log(chocolatePrice);
  addAll();
});

function addAll() {
  const chocolate = document.getElementById("chocolate").innerText;
  const rose = document.getElementById("rose").innerText;
  const diary = document.getElementById("diary").innerText;
  const total = parseInt(chocolate) + parseInt(rose) + parseInt(diary);
  document.getElementById("total").innerText = total;
}
document.getElementById("apply").addEventListener("click", function () {
  const coupon = document.getElementById("cupon").value;
  console.log(coupon);
  if (coupon == 20) {
    let discount = document.getElementById("total").innerText;
    let discountPrice = discount - discount * 0.2;
    document.getElementById("allCost").innerText = discountPrice;
    console.log(discountPrice);
  } else {
    alert("wrong coupon code");
  }
});
