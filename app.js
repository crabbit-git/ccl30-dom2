document.addEventListener('DOMContentLoaded', () => {
  const productsHTML = document.createElement('ul');
  data.products.forEach(product => {
    const productHTML = document.createElement('li');
    productHTML.textContent = product.name;
    productsHTML.appendChild(productHTML);
  });
  products.appendChild(productsHTML);
  // const productsSection = document.querySelector('#products');
  // console.log(productsSection);
});
