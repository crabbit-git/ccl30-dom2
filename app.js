document.addEventListener('DOMContentLoaded', () => {

  const productsSection = document.querySelector('#products');

  for (let i = 0; i < data.products.length; ++i) {
      const product = document.createElement('ul');
      product.classList.add('product');

      const productName = document.createElement('li');
      productName.textContent = data.products[i].name;
      product.appendChild(productName);
      productName.classList.add('product-name');

      const productDescription = document.createElement('li');
      productDescription.textContent = data.products[i].description;
      product.appendChild(productDescription);

      const productPrice = document.createElement('li');
      productPrice.textContent = data.products[i].price;
      product.appendChild(productPrice);

      productsSection.appendChild(product);

      console.log(productName.textContent);
    }

});
