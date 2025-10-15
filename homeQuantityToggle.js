export const homeQuantityToggle = (event, id, stock) => {
  //   console.log(id);
  // find on which product card we are changing the quantity
  const currentCardElement = document.querySelector(`#card${id}`);

  const productQuantityEl =
    currentCardElement.querySelector(".productQuantity");

  let quantity = parseInt(productQuantityEl.getAttribute("data-quantity")) || 1;

  if (event.target.className === "cartIncrement") {
    if (stock > quantity) {
      quantity += 1;
    }
    if (stock === quantity) {
      quantity = stock;
    }
  }
  if (event.target.className === "cartDecrement") {
    if (quantity > 1) {
      quantity -= 1;
    }
  }

  productQuantityEl.setAttribute("data-quantity", quantity);
  productQuantityEl.textContent = quantity;
};
