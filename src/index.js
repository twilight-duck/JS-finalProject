const buttonNext = document.querySelector('.next-button');
const buttonPrev = document.querySelector('.prev-button');
const slider = document.querySelector('.slider');



let offset = 0;

buttonNext.addEventListener('click', function(){
    offset = offset + 950;
    slider.style.left = -offset + 'px';
})

buttonPrev.addEventListener('click', function(){
    offset = offset - 950;
    slider.style.left = -offset + 'px';
})


function createElement(tagName, options) {
  const element = Object.assign(document.createElement(tagName), options);
  return element;
}

const catalogueItems = [
  {
    src: 'img/goods-image.svg',
    price: '1 999 ₽',
    oldPrice: '2 499 ₽',
    title: 'Футболка с дизайнерским принтом Super Shape 02 фиолетовая',
    description: 'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне', 
},
{
  src: 'img/goods-image.svg',
  price: '1 999 ₽',
  oldPrice: '2 499 ₽',
  title: 'Футболка с дизайнерским принтом Super Shape 02 фиолетовая',
  description: 'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне', 
},
{
  src: 'img/goods-image.svg',
  price: '1 999 ₽',
  oldPrice: '2 499 ₽',
  title: 'Футболка с дизайнерским принтом Super Shape 02 фиолетовая',
  description: 'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне', 
},
{
  src: 'img/goods-image.svg',
  price: '1 999 ₽',
  oldPrice: '2 499 ₽',
  title: 'Футболка с дизайнерским принтом Super Shape 02 фиолетовая',
  description: 'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне', 
}
]


function createCatalogueItem(item){
  const goodsWrapper = document.querySelector('.goods__wrapper');
  const goodsItem = createElement("article", {className: "goods__item"});
  const goodsItemHeader = createElement("header", {className: "goods__item-header"});
  const itemHeaderImage = createElement("div", {className: "item-header-image"});
  const itemHeaderPicture = createElement("img", {src: item.src, alt: "Goods-image"});
  const itemImageDiscount = createElement("span", {className: "item-image-discount", textContent: "-25%"});

  itemHeaderImage.insertAdjacentElement("beforeend", itemHeaderPicture);
  itemHeaderImage.insertAdjacentElement("beforeend", itemImageDiscount);
  goodsItemHeader.insertAdjacentElement("beforeend", itemHeaderImage);
  goodsItem.insertAdjacentElement("beforeend", goodsItemHeader);

  const priceWrapper = createElement("div", {className: "goods__item-price"});
  const goodsItemPrice = createElement("span", {className: "goods__item-price", textContent: item.price});
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
  const itemButton = createElement("button", {className: "goods__item-button", id: "item-button", textContent: " В корзину"});

  goodsItem.insertAdjacentElement("beforeend", goodsItemText);
  goodsItem.insertAdjacentElement("beforeend", goodsItemMoreText);
  goodsItem.insertAdjacentElement("beforeend", itemButton);

  goodsWrapper.insertAdjacentElement("beforeend", goodsItem);

  return goodsItem;
  
}

catalogueItems.forEach(function(item){
 createCatalogueItem(item);
})
  




