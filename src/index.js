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

import tshirtImage from '/img/goods-image.svg';
import blueTshirtImage from '/img/blue-tshirt-image.svg';
import hatImage from '/img/hat-image.svg';
import caseImage from '/img/case-image.svg';
import newHatImage from '/img/hat-2-image.svg';
import whiteCaseImage from '/img/white-case-image.svg';
import blueCaseImage from '/img/blue-case-image.svg';
import greenTshirtImage from '/img/green-tshirt-image.svg';
import redCaseImage from '/img/red-case-image.svg';
import redTshirtImage from '/img/red-tshirt-image.svg';

const catalogueItems = [
  {
    src: tshirtImage,
    id: '01',
    price: '1999 ₽',
    oldPrice: '2 499 ₽',
    title: 'Футболка с дизайнерским принтом Super Shape 02 фиолетовая',
    description: 'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне', 
},
{
  src: blueTshirtImage,
  id: '02',
  price: '1999 ₽',
  oldPrice: '2 499 ₽',
  title: 'Футболка с дизайнерским принтом Super Shape 02 фиолетовая',
  description: 'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне', 
},
{
  src: hatImage,
  id: '03',
  price: '1375 ₽',
  oldPrice: '2 499 ₽',
  title: 'Бейсболка с дизайнерским принтом Super Shape 01 белая',
  description: 'Бейсболка с дизайнерским принтом Super Shape 01 белая', 
},
{
  src: caseImage,
  id: '04',
  price: '599 ₽',
  oldPrice: '990 ₽',
  title: 'Чехол для iphone 12 с дизайнерским принтом Super Shape 03',
  description: 'Чехол для iphone 12 с дизайнерским принтом Super Shape 03', 
},
{
  src: tshirtImage,
  id: '05',
  price: '1999 ₽',
  oldPrice: '2 499 ₽',
  title: 'Футболка с дизайнерским принтом Super Shape 02 фиолетовая',
  description: 'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне', 
},
{
  src: newHatImage,
  id: '06',
  price: '1375 ₽',
  oldPrice: '2 499 ₽',
  title: 'Бейсболка с дизайнерским принтом Super Shape 02 абстракция',
  description: 'Бейсболка с дизайнерским принтом Super Shape 02 абстракция', 
},
{
  src: whiteCaseImage,
  id: '07',
  price: '599 ₽',
  oldPrice: '990 ₽',
  title: 'Чехол для iphone 12 с дизайнерским принтом Super Shape 03',
  description: 'Чехол для iphone 12 с дизайнерским принтом Super Shape 03', 
},
{
  src: blueCaseImage,
  id: '08',
  price: '599 ₽',
  oldPrice: '990 ₽',
  title: 'Чехол для iphone 12 с дизайнерским принтом Super Shape 02',
  description: 'Чехол для iphone 12 с дизайнерским принтом Super Shape 02', 
},
{
  src: greenTshirtImage,
  id: '09',
  price: '1999 ₽',
  oldPrice: '3 179 ₽',
  title: 'Футболка с дизайнерским принтом Super Shape 02 зеленая',
  description: 'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на зеленом фоне', 
},
{
  src: redCaseImage,
  id: '10',
  price: '599 ₽',
  oldPrice: '990 ₽',
  title: 'Чехол для iphone 12 с дизайнерским принтом Super Shape 06',
  description: 'Чехол для iphone 12 с дизайнерским принтом Super Shape 06', 
},
{
  src: redTshirtImage,
  id: '11',
  price: '2399 ₽',
  oldPrice: '3 790 ₽',
  title: 'Футболка с дизайнерским принтом Super Shape 06 абстракция',
  description: 'Футболка с дизайнерским принтом Super Shape 06 абстракция', 
},
{
  src: blueTshirtImage,
  id: '12',
  price: '1999 ₽',
  oldPrice: '2 499 ₽',
  title: 'Футболка с дизайнерским принтом Super Shape 02 фиолетовая',
  description: 'Футболка80 с дизайнерским принтом Super Shape 0201 абстракция на фиолетовом фоне', 
},
]


function createCatalogueItem(item){
  const goodsWrapper = document.querySelector('.goods__wrapper');
  const goodsItem = createElement("article", {className: "goods__item"});
  const goodsItemHeader = createElement("header", {className: "goods__item-header"});
  const itemHeaderImage = createElement("div", {className: "item-header-image"});
  const itemHeaderPicture = createElement("img", {src: item.src, alt: "Goods-image",className: "goods__item-image"});
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

  goodsWrapper.insertAdjacentElement("beforeend", goodsItem);
  goodsItem.setAttribute('data-id', `${item.id}`);
  return goodsItem;
  
}

catalogueItems.forEach(function(item){
 createCatalogueItem(item);
})
  








