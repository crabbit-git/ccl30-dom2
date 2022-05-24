document.addEventListener('DOMContentLoaded', () => {

  const productsSection = document.querySelector('#products');
  const productsHTML = document.createElement('ul');
  
// C-style "for" loop solution:
    for (let i = 0; i < data.products.length; i++) {
      const productHTML = document.createElement('li');
      productHTML.textContent = data.products[i].name;
      productsHTML.appendChild(productHTML);
      console.log(productHTML.textContent);
    }

// JavaScript-style "for" loop solution:
//   for (const product of data.products) {
//     const productHTML = document.createElement('li');
//     productHTML.textContent = product.name;
//     productsHTML.appendChild(productHTML);
//     console.log(product.name);
//   }

// Enumerator solution:
//   data.products.forEach(product => {
//     const productHTML = document.createElement('li');
//     productHTML.textContent = product.name;
//     productsHTML.appendChild(productHTML);
//     console.log(product.name);
//   });

  productsSection.appendChild(productsHTML);

});
