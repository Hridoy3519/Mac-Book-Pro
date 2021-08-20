
const buttons = document.getElementsByTagName('button');

function updateTotalPrice() {
    const basePrice = 1299;
    const memoryCost = parseInt(document.getElementById('memory-cost').textContent);
    const storageCost = parseInt(document.getElementById('storage-cost').textContent);
    const deliveryCost = parseInt(document.getElementById('delivery-cost').textContent);
    return basePrice + memoryCost + storageCost + deliveryCost;
}

function updateCost(id, cost) {
    const customizedItemCost = document.getElementById(id + '-cost');
    customizedItemCost.textContent = cost;
    const totalPrice = document.getElementById('total-price');
    const totalAmountPayable = document.getElementById('total-amount-payable');
    cost = updateTotalPrice();


    totalPrice.textContent = cost;
    totalAmountPayable.textContent = cost;
}

function checkPromoCode() {
    const inputField = document.getElementById('input-field');
    const promoCodeApplied = inputField.value;
    inputField.value = '';
    if (promoCodeApplied === "stevekaku") {
        const totalAmountPayable = document.getElementById('total-amount-payable');
        const preDiscountAmount = parseInt(totalAmountPayable.textContent);
        const postDiscountAmount = preDiscountAmount - (preDiscountAmount * 0.2);
        totalAmountPayable.textContent = postDiscountAmount;
    }
}

for (const button of buttons) {
    button.addEventListener('click', function (event) {
        if (button.id === '8gb-memory') {
            updateCost("memory", 0);
        }
        else if (button.id === '16gb-memory') {
            updateCost("memory", 180);
        }
        else if (button.id === '256gb-storage') {
            updateCost("storage", 0);
        }
        else if (button.id === '512gb-storage') {
            updateCost("storage", 100);
        }
        else if (button.id === '1tb-storage') {
            updateCost("storage", 180);
        }
        else if (button.id === 'prime-delivery') {
            updateCost("delivery", 0);
        }
        else if (button.id === 'early-delivery') {
            updateCost("delivery", 20);
        }

        else {
            checkPromoCode();
        }
    })
}