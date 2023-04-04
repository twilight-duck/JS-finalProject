const cartContent = document.querySelector('.cart__content');
const cartBody = document.querySelector('.cart__body');
const cartEmpty = document.querySelector('.cart__empty');
const cartDelete = document.querySelector('.cart__delete');

window.addEventListener('click', (event) => {

    if (event.target.hasAttribute('data-cart')){
        const card = event.target.closest('.goods__item');
        
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.goods__item-image').getAttribute('src'),
            title: card.querySelector('.goods__item-text').innerText,
            price: card.querySelector('.goods__item-discount').innerText,
        }
        
        

        const cartItemHTML = `<article class="cart__item">
        <div class="cart__item-image">
        <img src=${productInfo.imgSrc} alt="Goods-image">
        </div>
        <div class="cart__item-description">
          <p class="item__name">
            ${productInfo.title}
          </p>
          <span class="item__article">Артикул: <span>123654785</span></span>
          <button class="item__delete" data-action = "delete">Удалить</button>
        </div>
        <div class="item__amount">
          ${productInfo.price}
        </div>
        <div class="item__quantity">
          1 шт
        </div>
        <div class="item__net-amount">
        ${productInfo.price}
        </div>
      </article>`;
        
      cartBody.insertAdjacentHTML('beforeend', cartItemHTML);
      
      toggleCartStatus();
      calculateTotalPrice();
    }

    if(event.target.closest('.cart__body') && event.target.dataset.action === "delete"){
      event.target.closest(".cart__item").remove();
      toggleCartStatus();
      calculateTotalPrice();
    }
      
})

function toggleCartStatus() {
  if(cartBody.children.length > 0){
      cartEmpty.classList.add('none')
    } else {
      cartEmpty.classList.remove('none')
    }
}

function calculateTotalPrice(){
  const cartItems = document.querySelectorAll('.cart__item');
  let totalPrice = 0; 

  cartItems.forEach(function (item) {
    const priceEl = item.querySelector('.item__amount');
    totalPrice += parseInt(priceEl.textContent);
  })
  const cartTotalAmount = document.querySelector('.cart__amount');

  cartTotalAmount.innerHTML = totalPrice + ' ₽';

}

cartDelete.addEventListener('click', () => {
  cartBody.innerHTML = '';
  toggleCartStatus();
  calculateTotalPrice();
})