document.addEventListener('DOMContentLoaded', () => {

  const productsSection = document.querySelector('#products');

  for (let i = 0; i < data.products.length; ++i) {
      const product = data.products[i];
      const productUL = document.createElement('ul');
      productUL.classList.add('product');

      for (const property in product) {
        const productProperty = document.createElement('li');
        productProperty.textContent = product[property];
        productUL.appendChild(productProperty);
        // console.log(product[property]);
      }
      
      // productName.classList.add('product-name');
      productsSection.appendChild(productUL);

    }

});
