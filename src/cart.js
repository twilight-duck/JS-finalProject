const cartContent = document.querySelector('.cart__content');
const cartBody = document.querySelector('.cart__body');
const cartEmpty = document.querySelector('.cart__empty');
const cartDelete = document.querySelector('.cart__delete');
const cartCircle = document.querySelector('.cart-circle');
let itemsCount = 0;
// Отслеживаем клик по кнопке "Добавить в корзину"
window.addEventListener('click', (event) => {

    if (event.target.hasAttribute('data-cart')){
        const card = event.target.closest('.goods__item');
        const cartButton = event.target.closest('.goods__item-button');
        cartButton.classList.add('active');
        cartButton.innerText = 'Добавлено';
// Собираем данные о карточке товара
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.goods__item-image').getAttribute('src'),
            title: card.querySelector('.goods__item-text').innerText,
            price: card.querySelector('.goods__item-discount').innerText,
        }
        
        
// Отрисовывем товар, по которому кликнули, в корзине. 
        createCartItem(productInfo);
      
      let arr = [];
      if (localStorage.getItem('product'))
      arr = JSON.parse(localStorage.getItem('product'));
        
      const productID = productInfo.id,
      productImg = productInfo.imgSrc,
      productTitle = productInfo.title,
      productPrice = productInfo.price;
      arr.push({productID, productImg, productTitle, productPrice});
      localStorage.setItem('product', JSON.stringify(arr));
      itemsCount++;
      console.log(itemsCount);
      changeCartCircle();
      toggleCartStatus();
      calculateTotalPrice();
    }

// Удаляем товар из корзины
    if(event.target.closest('.cart__body') && event.target.dataset.action === "delete"){
      event.target.closest(".cart__item").remove();
      itemsCount--;
      changeCartCircle();
      toggleCartStatus();
      calculateTotalPrice();
    } 
  })


  if(localStorage.getItem('product')){
    productArr = JSON.parse(localStorage.getItem('product'));
    itemsCount = productArr.length;
    productArr.forEach(({productID, productImg, productTitle, productPrice}) => {
      const cartItemHTML = `<article class="cart__item">
      <div class="cart__item-image">
      <img src=${productImg} alt="Goods-image">
      </div>
      <div class="cart__item-description">
        <p class="item__name">
          ${productTitle}
        </p>
        <span class="item__article">Артикул: <span>123654785</span></span>
        <button class="item__delete" data-action = "delete">Удалить</button>
      </div>
      <div class="item__amount">
        ${productPrice}
      </div>
      <div class="item__quantity">
        1 шт
      </div>
      <div class="item__net-amount">
      ${productPrice}
      </div>
    </article>`;
      
    cartBody.insertAdjacentHTML('beforeend', cartItemHTML);
    });

    calculateTotalPrice();
    toggleCartStatus();
    changeCartCircle();
   }

// Отображаем или скрываем поле "Корзина пуста"

function toggleCartStatus() {
  if(cartBody.children.length > 0){
      cartEmpty.classList.add('none')
    } else {
      cartEmpty.classList.remove('none')
    }
}

// Подсчет итоговой стоимости товаров

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

// Удаляем из корзины всё сразу

cartDelete.addEventListener('click', () => {
  cartBody.innerHTML = '';
  itemsCount = 0;
  toggleCartStatus();
  calculateTotalPrice();
  cartCircle.innerHTML = '0';
  cartCircle.classList.remove('active');
  localStorage.clear();
})


// - к количеству товаров в корзине
function changeCartCircle(){
  cartCircle.innerHTML = itemsCount;
  if(itemsCount === 0){
    cartCircle.classList.remove('active');
  } else {
    cartCircle.classList.add('active');
  }
}

function createCartItem(item){
  const cartItemHTML = `<article class="cart__item">
  <div class="cart__item-image">
  <img src=${item.imgSrc} alt="Goods-image">
  </div>
  <div class="cart__item-description">
    <p class="item__name">
      ${item.title}
    </p>
    <span class="item__article">Артикул: <span>123654785</span></span>
    <button class="item__delete" data-action = "delete">Удалить</button>
  </div>
  <div class="item__amount">
    ${item.price}
  </div>
  <div class="item__quantity">
    1 шт
  </div>
  <div class="item__net-amount">
  ${item.price}
  </div>
</article>`;
  
cartBody.insertAdjacentHTML('beforeend', cartItemHTML);
return cartItemHTML;
}
