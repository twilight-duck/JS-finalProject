// const inputSearch = document.querySelector('.header-input');
// let searchedItems = document.querySelectorAll('.goods__item');
// const buttonSearch = document.querySelector('.button-search')

// inputSearch.addEventListener('input', function() {
//     const goodsWrapper = document.querySelector('.goods__wrapper');
//     goodsWrapper.innerHTML = '';
//     const url = new URL('https://642ea9408ca0fe3352d57a26.mockapi.io/api/v1/cards');
//     url.searchParams.append('title', inputSearch.value);

// fetch(url, {
//   method: 'GET',
//   headers: {'content-type':'application/json'},
// }).then(res => {
//   if (res.ok) {
//       return res.json();
//   }
//   // handle error
// }).then((cards) => {
//     cards.forEach((card) => {
//       createCatalogueItem(card);
//     })
// }).catch(() => {
//     const element = document.createElement('div');
//     element.innerText = 'Упс... что-то пошло не так';
//     goodsWrapper.append(element);
// })

//     let value = this.value.trim().toUpperCase();
//     if (value != ''){

// // Проверяем наличие карточки с товаром через поиск 
//         searchedItems.forEach(function (item) {
//             if (item.innerHTML.toUpperCase().search(value) == -1){
//                 item.classList.add('hidden');
//             } else{
//                 item.classList.remove('hidden');
//             }
//         })
//     } else {
//         searchedItems.forEach(function (item) {
//             item.classList.remove('hidden');
//         }
//         )}
// });

