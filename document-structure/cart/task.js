const prodMenu = Array.from(document.querySelectorAll('.product__quantity-controls'))
const addBasket = Array.from(document.querySelectorAll('.product__add'))
const products = document.querySelector('.products')
const basket = document.querySelector('.cart__products')

prodMenu.forEach((item, i ) => {
  const minus = item.children[0];
  const count = item.children[1];
  const plus = item.children[2];

  plus.addEventListener('click', () => {
    count.textContent++
  })

  minus.addEventListener('click', () => {
    if(Number(count.textContent) > 1) {
      count.textContent--
    }
  })
})

function addProd(event) {
  const product = event.target.closest('.product');
  const id = product.dataset.id;
  const countProd = +event.target.parentNode.querySelector('.product__quantity-value').innerText;
  const productImage = product.querySelector('.product__image').src;
  const carts = Array.from(document.querySelectorAll('.cart__product'))

  const productInCard = carts.find(item =>
    item.dataset.id === id);

  if (productInCard) {
    let countInBasket = productInCard.querySelector('.cart__product-count')
    let sumCount = parseInt(countInBasket.innerText);
    countInBasket.innerText = sumCount + countProd;
  } else {
    const addProdTo = `<div class="cart__product" data-id="${id}">
                               <img class="cart__product-image" src="${productImage}">
                               <div class="cart__product-count">${countProd}</div>
                            </div>`;

    basket.insertAdjacentHTML('beforeend', addProdTo)
  }
}

addBasket.forEach((i) => {
  i.addEventListener('click', addProd)
})