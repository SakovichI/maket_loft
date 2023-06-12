const btnAdd = document.querySelectorAll('[data-btn="add-curt"]');
const productsList = document.querySelector(".basket__items");
const cartIcon = document.querySelector('[data-id="basket"]');
const fullPrice = document.querySelector(".coast");
const amount = document.querySelector(".basket__subtitle span");
let price = 0;

/* Преобразователь строки в число без пробелов */

const priceWithoutSpace = (str) => {
  return str.replace(/\s/g, "");
};

/* Преобразовывает цену в строку с пробелами */

const normalPrice = (str) => {
  return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
};

const plusFullPrice = (curentPrice) => {
  return (price += curentPrice);
};

const minusFullPrice = (curentPrice) => {
  return (price -= curentPrice);
};

const printFullPrice = () => {
  fullPrice.textContent = `${normalPrice(price)} ₽`;
};

const printAmount = () => {
  let length = productsList.children.length;
  amount.textContent = length;
  length > 0
    ? cartIcon.classList.add("head__menu-item_active")
    : cartIcon.classList.remove("head__menu-item_active");
};

/* локал сторадж */
const updateStorage = () => {
  let html = productsList.innerHTML;
  html = html.trim();
  if (html.length) {
    localStorage.setItem("Product", html);
  } else {
    localStorage.removeItem("Product", html);
  }
};

const summCount = () => {
  document.querySelectorAll(".basket__item").forEach((e) => {
    price += parseInt(priceWithoutSpace(e.querySelector(".basket__item-price").innerText));
  });
};

const initialState = () => {
  if (localStorage.getItem("Product") !== null) {
    productsList.innerHTML = localStorage.getItem("Product");
    printAmount();
    summCount();
    printFullPrice();
  }
};
initialState();

const generateProduct = (id, imgSrc, imgAlt, title, priceNumber) => {
  return `
 <div class="basket__item" data-id="${id}">
    <img class="basket__item-img" src="${imgSrc}" alt="${imgAlt}" />
            <p class="basket__item-name">${title}</p>
            <p class="basket__item-action">
              <svg class="item-action__icon" width="19" height="19" viewBox="0 0 19 19" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.46429 7.07143H7.67857M11.3214 11.9286H12.5357M12.5357 6.46429L6.46429 12.5357M8.65177 1.35135L7.28081 2.7223C7.05585 2.94727 6.75073 3.07365 6.43258 3.07365H4.27324C3.61073 3.07365 3.07365 3.61073 3.07365 4.27324V6.43258C3.07365 6.75073 2.94727 7.05585 2.7223 7.28081L1.35135 8.65177C0.882883 9.12023 0.882883 9.87977 1.35135 10.3482L2.7223 11.7192C2.94727 11.9442 3.07365 12.2493 3.07365 12.5674V14.7268C3.07365 15.3893 3.61073 15.9263 4.27324 15.9263H6.43258C6.75073 15.9263 7.05585 16.0527 7.28081 16.2777L8.65177 17.6486C9.12023 18.1171 9.87977 18.1171 10.3482 17.6486L11.7192 16.2777C11.9442 16.0527 12.2493 15.9263 12.5674 15.9263H14.7268C15.3893 15.9263 15.9263 15.3893 15.9263 14.7268V12.5674C15.9263 12.2493 16.0527 11.9442 16.2777 11.7192L17.6486 10.3482C18.1171 9.87977 18.1171 9.12023 17.6486 8.65177L16.2777 7.28081C16.0527 7.05585 15.9263 6.75073 15.9263 6.43258V4.27324C15.9263 3.61073 15.3893 3.07365 14.7268 3.07365H12.5674C12.2493 3.07365 11.9442 2.94727 11.7192 2.7223L10.3482 1.35135C9.87977 0.882883 9.12023 0.882883 8.65177 1.35135Z"
                  stroke="#E92D2D" />
              </svg>
              <span class="item-action__value">-25%</span>
              <span class="item-action__old-price">37 990₽</span>
            </p>
            <p class="basket__item-price">${normalPrice(priceNumber)} ₽</p>
    
            <div class="item__color">
              <span class="item__title">Цвет:</span>
              <span class="item__value">Темно-синий</span>
              <div class="item__color-visual">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="14" height="14" fill="#353E4D" />
                </svg>
              </div>
            </div>
            <div class="item__amount">
              <span class="item__title">Количество:</span>
              <span class="item__value amount-value">1</span>
            </div>
            <div class="item__size">
              <span class="item__title">Размер(Ш×Д×В):</span>
              <span class="item__value">218 СМ × 95 СМ × 90 СМ</span>
            </div>
    
    
            <button class="basket__item-btn"
            data-btn-close="delete">
              <svg class="item-btn__icon" width="10" height="10" viewBox="0 0 10 10" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M3.84772 5.70711C4.23824 5.31658 4.23824 4.68342 3.84772 4.29289L1.22259 1.66776C1.09966 1.54483 1.09966 1.34552 1.22259 1.22259C1.34552 1.09966 1.54483 1.09966 1.66776 1.22259L4.29289 3.84772C4.68342 4.23824 5.31658 4.23824 5.70711 3.84772L8.33224 1.22259C8.45517 1.09966 8.65448 1.09966 8.77741 1.22259C8.90034 1.34552 8.90034 1.54483 8.77741 1.66776L6.15228 4.29289C5.76175 4.68342 5.76175 5.31658 6.15228 5.70711L8.77741 8.33224C8.90034 8.45517 8.90034 8.65448 8.77741 8.77741C8.65448 8.90034 8.45517 8.90034 8.33224 8.77741L5.70711 6.15228C5.31658 5.76175 4.68342 5.76175 4.29289 6.15228L1.66776 8.77741C1.54483 8.90034 1.34552 8.90034 1.22259 8.77741C1.09966 8.65448 1.09966 8.45517 1.22259 8.33224L3.84772 5.70711Z"
                  fill="#C9C9C9" stroke="#C9C9C9" />
              </svg>
            </button>
          </div>`;
};

btnAdd.forEach((el) => {
  el.addEventListener("click", (e) => {
    let self = e.currentTarget;
    let parent = self.closest(".name_size-btn");
    let id = parent.dataset.id;
    let imgSrc = parent.querySelector(".product__img").getAttribute("src");
    let imgAlt = parent.querySelector(".product__img").getAttribute("alt");
    let title = parent.querySelector("h1").textContent;
    let priceNumber = parseInt(priceWithoutSpace(parent.querySelector("h3").innerText));

    /* Проверка наличия товара в корзине  */
    const itemInCurt = productsList.querySelector(`[data-id="${id}"]`);
    
    const addItem = (value) => {
      if (itemInCurt) {
        let amountProd = itemInCurt.querySelector(".amount-value");
        amountProd.innerText = ++amountProd.innerText ;
      } else {
        productsList.insertAdjacentHTML(
          "beforeend",
          generateProduct(id, imgSrc, imgAlt, title, priceNumber)
        );      
      };
      if (itemInCurt){
            let priceProd = itemInCurt.querySelector('.basket__item-price');
            priceProd.textContent = `${normalPrice (priceNumber * itemInCurt.querySelector(".amount-value").innerText)} ₽`;
      };
    };
    addItem();
    plusFullPrice(priceNumber);
    printFullPrice();
    printAmount();
    updateStorage();
  });
});
productsList.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-btn-close")) {
    let curentPrice = parseInt(
      priceWithoutSpace(
        e.target.closest(".basket__item").querySelector(".basket__item-price").innerText
      )
    );
    minusFullPrice(curentPrice);
    printFullPrice();
    e.target.closest(".basket__item").remove();
    printAmount();
    updateStorage();
  }

  /* подсчет стоймости */ 
});
