parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
var e=document.querySelector(".header-input"),t=document.querySelectorAll(".goods__item"),n=document.querySelector(".button-search");function i(e,t){return Object.assign(document.createElement(e),t)}function a(e){var t=i("i",{className:"fa-solid"});return t.classList.add(e),t}function s(e){var t=document.querySelector(".goods__wrapper"),n=i("article",{className:"goods__item"}),s=i("header",{className:"goods__item-header"}),c=i("div",{className:"item-header-image"}),r=i("img",{src:e.image,alt:"Goods-image",className:"goods__item-image"}),o=i("span",{className:"item-image-discount",textContent:"-25%"});c.insertAdjacentElement("beforeend",r),c.insertAdjacentElement("beforeend",o),s.insertAdjacentElement("beforeend",c),n.insertAdjacentElement("beforeend",s);var d=i("div",{className:"goods__item-price"}),l=i("span",{className:"goods__item-discount",textContent:e.price}),u=i("span",{className:"goods__item-old-price",textContent:e.oldPrice});d.insertAdjacentElement("beforeend",l),d.insertAdjacentElement("beforeend",u),n.insertAdjacentElement("beforeend",d);var m=i("div",{className:"ranking__wrapper"}),_=i("span",{className:"ranking__text",textContent:"4.9"}),v=i("span",{className:"ranking__number",textContent:"14 отзывов"});m.insertAdjacentElement("beforeend",_),m.insertAdjacentElement("beforeend",v),n.insertAdjacentElement("beforeend",m);var p=i("p",{className:"goods__item-text",textContent:e.title}),f=i("p",{className:"goods__item-text-hover",textContent:e.description}),b=i("button",{className:"goods__item-button",id:"item-button",textContent:" В корзину"});b.setAttribute("data-cart","add"),n.insertAdjacentElement("beforeend",p),n.insertAdjacentElement("beforeend",f),n.insertAdjacentElement("beforeend",b);var g=i("a",{className:"item-quick-view",href:"#quick-view__popup"}),q=a("fa-eye"),k=i("span",{className:"fa-eye-text",textContent:"Быстрый просмотр товара"});return g.insertAdjacentElement("beforeend",q),g.insertAdjacentElement("beforeend",k),n.insertAdjacentElement("beforeend",g),t.insertAdjacentElement("beforeend",n),n.setAttribute("data-id","".concat(e.id)),n}function c(e){var t='<div id="quick-view__popup" class="popup quick-view__popup">\n  <a href="#" class="overlay"></a>\n  <div class="quick-view__content">\n    <div class="quick__view-wrapper">\n      <div class="quick-view__left">\n        <div class="quick-view__image-slider">\n          <div class="quick-view__image-slider-line">\n            <img  src="'.concat(e.image,'" alt="">\n            <img  src="').concat(e.image,'" alt="">\n          </div>\n          <button class="quick__view-btn-next"><i class="fa-solid fa-chevron-right"></i></button>\n          <button class="quick__view-btn-prev"><i class="fa-solid fa-chevron-right"></i></button>\n          <div class="quick__view-slider-dots">\n                          <div class="quick__view-slider__dot active-slider-dot"></div>\n                          <div class="quick__view-slider__dot"></div>\n                          <div class="quick__view-slider__dot"></div>\n                          <div class="quick__view-slider__dot"></div>\n                        </div>\n          </div>\n       \n      </div>\n      <div class="quick-view__right">\n        <span class="quick__view-title">').concat(e.title,'</span>\n        <span class="quick__view-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum perferendis aut eius impedit quibusdam, nihil libero culpa dolorem blanditiis eveniet. Facere quae fugit provident, eius nihil officia dicta nobis? Dignissimos repudiandae voluptatum ducimus corporis veniam?</span>\n      </div>\n    </div>');document.getElementById("root").insertAdjacentHTML("beforeend",t)}var r=function(){var e="https://642ea9408ca0fe3352d57a26.mockapi.io/api/v1/cards";new Promise(function(t,n){fetch(e).then(function(e){e.ok?t(e.json()):n(new Error("error"))})}).then(function(e){e.forEach(function(e){s(e)})})};r(),e.addEventListener("input",function(){var t=document.querySelector(".goods__wrapper");t.innerHTML="";var n=new URL("https://642ea9408ca0fe3352d57a26.mockapi.io/api/v1/cards");n.searchParams.append("title",e.value),fetch(n,{method:"GET",headers:{"content-type":"application/json"}}).then(function(e){if(e.ok)return e.json()}).then(function(e){e.forEach(function(e){s(e)})}).catch(function(){var e=document.createElement("div");e.innerText="Упс... что-то пошло не так",t.append(e)})});var o=document.querySelector(".quick__view-btn-next"),d=document.querySelector(".quick__view-btn-prev"),l=document.querySelector(".quick-view__image-slider-line"),u=0;o.addEventListener("click",function(){(u+=300)>=900&&(u=0),l.style.left=-u+"px"}),d.addEventListener("click",function(){(u-=300)<0&&(u=600),l.style.left=-u+"px"});
},{}]},{},["Focm"], null)