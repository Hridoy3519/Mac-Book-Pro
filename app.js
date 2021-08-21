
// Html Collection of Buttons
const buttons = document.getElementsByTagName('button');

// Will use it to Check if promo code applied is valid or not, by default false.
let isPromoActive = false;

function updateTotalPrice() {
    // Adding all the cost of customizations, text content is parsed in to integer first.
    const basePrice = 1299;
    const memoryCost = parseInt(document.getElementById('memory-cost').textContent);
    const storageCost = parseInt(document.getElementById('storage-cost').textContent);
    const deliveryCost = parseInt(document.getElementById('delivery-cost').textContent);
    return basePrice + memoryCost + storageCost + deliveryCost;
}

function applyDiscount() {
    // If promo code is valid applying 20% discount to total price
    // else return total price: no discount.
    const totalPrice = document.getElementById('total-price');
    const preDiscountAmount = parseInt(totalPrice.textContent);
    if (isPromoActive) {
        return preDiscountAmount - (preDiscountAmount * 0.2);
    }
    else {
        return preDiscountAmount;
    }
}

function updateCost(id, cost) {
    // Display the cost of customizing this item
    const customizedItemCost = document.getElementById(id + '-cost');
    customizedItemCost.textContent = cost;

    // Calculating the total Cost of customization and updating on Total Price field.
    const totalCost = updateTotalPrice();
    const totalPrice = document.getElementById('total-price');
    totalPrice.textContent = totalCost;

    // Total Amount payable may be different then total cost,if user previously applied the promo code.
    const totalAmountPayable = document.getElementById('total-amount-payable');
    totalAmountPayable.textContent = applyDiscount();
}

function checkPromoCode() {
    const inputField = document.getElementById('input-field');
    const promoCodeApplied = inputField.value;

    // resetting input field  to empty string. 
    inputField.value = '';

    // if user presses apply button with empty input field, do nothing, return
    // else check validation of promo code, here promo code is considered case-sensitive.
    if (promoCodeApplied === '') return;
    else if (promoCodeApplied === "stevekaku") {
        isPromoActive = true;
    }
    else {
        isPromoActive = false;
        alert("This promo code doesn't exist");
    }

    // apply appropriate discount on total Price and show total amount payable
    const totalAmountPayable = document.getElementById('total-amount-payable');
    totalAmountPayable.textContent = applyDiscount();
}

// Applying event listener to individual buttons by iterating the HTML Collections of Buttons.
for (const button of buttons) {
    button.addEventListener('click', function () {
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