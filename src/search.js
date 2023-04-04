const inputSearch = document.querySelector('.header-input');

let searchedItems = document.querySelectorAll('.goods__item');


inputSearch.oninput = function() {
    let value = this.value.trim().toUpperCase();
    if (value != ''){

// Проверяем наличие карточки с товаром через поиск 
        searchedItems.forEach(function (item) {
            if (item.innerHTML.toUpperCase().search(value) == -1){
                item.classList.add('hidden');
            } else{
                item.classList.remove('hidden');
            }
        })
    } else {
        searchedItems.forEach(function (item) {
            item.classList.remove('hidden');
        }
        )}
    }

    