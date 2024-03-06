function adjustQuantity(btn, change) {
    const quantityElem = btn.parentElement.querySelector('.quantity');
    let quantity = parseInt(quantityElem.innerText);
    quantity += change;
    quantity = Math.max(quantity, 0);
    quantityElem.innerText = quantity;

    updateTotalPrice();
}


function deleteItem(btn) {
    const item = btn.parentElement;
    item.remove();

    updateTotalPrice();
}


function toggleLike(likeBtn) {
    likeBtn.classList.toggle('active');
    updateTotalPrice();
}
            
function updateTotalPrice() {
    let totalPrice = 0;

    document.querySelectorAll('.cart-item').forEach(item => {
        const quantity = parseInt(item.querySelector('.quantity').innerText);
        const price = parseFloat(item.getAttribute('data-price'));
        totalPrice += quantity * price;
    });

    document.getElementById('total').innerText = totalPrice.toFixed(2);
}