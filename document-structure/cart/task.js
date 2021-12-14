const quantityControl = document.querySelectorAll('.product__quantity-control');
const buttonAddCart = document.querySelectorAll('.product__add');
const cart = document.querySelector('.cart__products');
let analogElement;

for (let i of quantityControl) {
    i.addEventListener('click', () => {
        const quantityValue = i.closest('.product__quantity-controls').querySelector('.product__quantity-value');

        if (i.classList.contains('product__quantity-control_dec')) {
            if (quantityValue.textContent > 1) {
                quantityValue.textContent--;
            }
        } else {
            quantityValue.textContent++
        }
    });
}

for (let k of buttonAddCart) {
    k.addEventListener('click', () => {
        const addProductCartElement = document.createElement('div');
        const productParentElement = k.closest('.product');
        const productImage = productParentElement.querySelector('.product__image');
        const productQuantity = productParentElement.querySelector('.product__quantity-value');
        const productInCart = cart.querySelectorAll('.cart__product');

        if (productInCart.length === 0) {
            addInCart();
        } else {
            checkAnalogProduct();
        }

        function checkAnalogProduct() {
            for (l of productInCart) {
                if (l.dataset.id === productParentElement.dataset.id) {
                    analogElement = l;
                }
            }

            if (analogElement === undefined) {
                addInCart();
            } else {
                let productInCartQuantity = analogElement.querySelector('.cart__product-count');
                productInCartQuantity.textContent = +productInCartQuantity.textContent + +productQuantity.textContent;

                analogElement = undefined;
            }
        }

        function addInCart() {
            addProductCartElement.classList.add('cart__product');
            addProductCartElement.dataset.id = productParentElement.dataset.id;
            addProductCartElement.innerHTML = `
                <img class="cart__product-image" src="${productImage.src}">
                <div class="cart__product-count">${productQuantity.textContent}</div>
            `;
            cart.appendChild(addProductCartElement);
        }
    });
}