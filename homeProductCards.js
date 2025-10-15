const productContainer = document.getElementById("productContainer");
const productTemplate = document.getElementById("productTemplate");

export const showProductContainer = (products) => {
  if (!products) {
    return false;
  }
  products.forEach((product) => {
    const {
      brand,
      id,
      category,
      image: productImage,
      name: productName,
      productDescription,
      price: productPrice,
      productActualPrice,
      stock: productStock,
    } = product;

    const productClone = productTemplate.content.cloneNode(true);

    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productImage").src = productImage;
    productClone.querySelector(".productImage").alt = productName;
    productClone.querySelector(".productName").textContent = productName;
    productClone.querySelector(".productDescription").textContent =
      productDescription;
    productClone.querySelector(
      ".productPrice"
    ).textContent = `₹${productPrice}`;
    productClone.querySelector(
      ".productActualPrice"
    ).textContent = `₹${productPrice}`;
    productClone.querySelector(".productStock").textContent = productStock;

    productContainer.appendChild(productClone);
  });
};
