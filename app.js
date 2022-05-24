document.addEventListener('DOMContentLoaded', () => {

  const productsSection = document.querySelector('#products');

  for (const product of data.products) {
      const productUL = document.createElement('ul');
      productUL.classList.add('product');

      for (const property in product) {
        const propertyLI = document.createElement('li');
        propertyLI.classList.add(`product-${property}`);
        propertyLI.textContent = product[property];
        productUL.appendChild(propertyLI);
      }

      productsSection.appendChild(productUL);
  }
});
