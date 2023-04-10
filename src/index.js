const inputSearch = document.querySelector('.header-input');
let searchedItems = document.querySelectorAll('.goods__item');
const buttonSearch = document.querySelector('.button-search')

function createElement(tagName, options) {
  const element = Object.assign(document.createElement(tagName), options);
  return element;
}

function createIcon(className) {
  const element = createElement("i", { className: "fa-solid" });
  element.classList.add(className);

  return element;
}

function createCatalogueItem(item){
  const goodsWrapper = document.querySelector('.goods__wrapper');
  const goodsItem = createElement("article", {className: "goods__item"});
  const goodsItemHeader = createElement("header", {className: "goods__item-header"});
  const itemHeaderImage = createElement("div", {className: "item-header-image"});
  const itemHeaderPicture = createElement("img", {src: item.image, alt: "Goods-image",className: "goods__item-image"});
  const itemImageDiscount = createElement("span", {className: "item-image-discount", textContent: "-25%"});

  itemHeaderImage.insertAdjacentElement("beforeend", itemHeaderPicture);
  itemHeaderImage.insertAdjacentElement("beforeend", itemImageDiscount);
  goodsItemHeader.insertAdjacentElement("beforeend", itemHeaderImage);
  goodsItem.insertAdjacentElement("beforeend", goodsItemHeader);

  const priceWrapper = createElement("div", {className: "goods__item-price"});
  const goodsItemPrice = createElement("span", {className: "goods__item-discount", textContent: item.price});
  const goodsItemOldPrice = createElement("span", {className: "goods__item-old-price", textContent: item.oldPrice});

  priceWrapper.insertAdjacentElement("beforeend", goodsItemPrice);
  priceWrapper.insertAdjacentElement("beforeend", goodsItemOldPrice);
  goodsItem.insertAdjacentElement("beforeend", priceWrapper);

  const rankingWrapper = createElement("div", {className: "ranking__wrapper"});
  const rankingText = createElement("span", {className: "ranking__text", textContent: "4.9"});
  const rankingNumber = createElement("span", {className: "ranking__number", textContent: "14 отзывов"});

  rankingWrapper.insertAdjacentElement("beforeend", rankingText);
  rankingWrapper.insertAdjacentElement("beforeend", rankingNumber);
  goodsItem.insertAdjacentElement("beforeend", rankingWrapper);

  const goodsItemText = createElement("p", {className: "goods__item-text", textContent: item.title});
  const goodsItemMoreText = createElement("p", {className: "goods__item-text-hover", textContent: item.description});
  const itemButton = createElement("button", {className: "goods__item-button", id: "item-button", textContent: " В корзину",});
  itemButton.setAttribute('data-cart', 'add');
  goodsItem.insertAdjacentElement("beforeend", goodsItemText);
  goodsItem.insertAdjacentElement("beforeend", goodsItemMoreText);
  goodsItem.insertAdjacentElement("beforeend", itemButton);


  const itemQuickView = createElement("a", {className: "item-quick-view", href: "#quick-view__popup"});
  const itemEye = createIcon("fa-eye");
  const itemEyeText = createElement("span", {className: "fa-eye-text", textContent: "Быстрый просмотр товара"})
  itemQuickView.insertAdjacentElement("beforeend", itemEye);
  itemQuickView.insertAdjacentElement("beforeend", itemEyeText);
  goodsItem.insertAdjacentElement("beforeend", itemQuickView);

  
  goodsWrapper.insertAdjacentElement("beforeend", goodsItem);
  goodsItem.setAttribute('data-id', `${item.id}`);
  return goodsItem;
  
}

function createPopupItem(item){
  const quickViewPopup = `<div id="quick-view__popup" class="popup quick-view__popup">
  <a href="#" class="overlay"></a>
  <div class="quick-view__content">
    <div class="quick__view-wrapper">
      <div class="quick-view__left">
        <div class="quick-view__image-slider">
          <div class="quick-view__image-slider-line">
            <img  src="${item.image}" alt="">
            <img  src="${item.image}" alt="">
          </div>
          <button class="quick__view-btn-next"><i class="fa-solid fa-chevron-right"></i></button>
          <button class="quick__view-btn-prev"><i class="fa-solid fa-chevron-right"></i></button>
          <div class="quick__view-slider-dots">
                          <div class="quick__view-slider__dot active-slider-dot"></div>
                          <div class="quick__view-slider__dot"></div>
                          <div class="quick__view-slider__dot"></div>
                          <div class="quick__view-slider__dot"></div>
                        </div>
          </div>
       
      </div>
      <div class="quick-view__right">
        <span class="quick__view-title">${item.title}</span>
        <span class="quick__view-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum perferendis aut eius impedit quibusdam, nihil libero culpa dolorem blanditiis eveniet. Facere quae fugit provident, eius nihil officia dicta nobis? Dignissimos repudiandae voluptatum ducimus corporis veniam?</span>
      </div>
    </div>`;

    const root = document.getElementById('root');
    root.insertAdjacentHTML('beforeend', quickViewPopup);

}

const createElements = () => {
  const URL = 'https://642ea9408ca0fe3352d57a26.mockapi.io/api/v1/cards';
  function getCards(){
    return new Promise((resolve, reject) => {
      fetch(URL).then((response) =>{
        if(response.ok){
          resolve(response.json())
        } else{
          reject(new Error('error'));
        }
      })
    })
  }

  getCards().then((cards) => {
    cards.forEach((card) => {
     createCatalogueItem(card);
    });
  })
}


createElements();

inputSearch.addEventListener('input', function() {
    const goodsWrapper = document.querySelector('.goods__wrapper');
    goodsWrapper.innerHTML = '';
    const url = new URL('https://642ea9408ca0fe3352d57a26.mockapi.io/api/v1/cards');
    url.searchParams.append('title', inputSearch.value);

fetch(url, {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then((cards) => {
    cards.forEach((card) => {
      createCatalogueItem(card);
      })
}).catch(() => {
    const element = document.createElement('div');
    element.innerText = 'Упс... что-то пошло не так';
    goodsWrapper.append(element);
})
});


const viewButtonNext = document.querySelector('.quick__view-btn-next');
const viewButtonPrev = document.querySelector('.quick__view-btn-prev');
const viewSliderLine = document.querySelector('.quick-view__image-slider-line');

let offset = 0;


viewButtonNext.addEventListener('click', function(){
    offset = offset + 300;
    if (offset >= 900) {
        offset = 0;
    }
    viewSliderLine.style.left = -offset + 'px';
});

viewButtonPrev.addEventListener('click', function () {
    offset = offset - 300;
    if (offset < 0) {
        offset = 600;
    }
    viewSliderLine.style.left = -offset + 'px';
});