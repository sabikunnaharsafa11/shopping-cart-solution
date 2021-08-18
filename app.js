function updatProductNumber( product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
     
    if(isIncreasing == true){
        productNumber = parseFloat (productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseFloat(productNumber) - 1;
    }
    productInput.value = productNumber;
    // upsate total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calcutor total 
    calculateTotal();
}
function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseFloat(productInput.value);
    return productNumber; 
}
function calculateTotal(){
   
   const phoneTotal = getInputValue('phone') * 1219;
   const caseTotal = getInputValue('case') * 59;
   const subTotal = phoneTotal + caseTotal;
   const tax = subTotal / 10;
   const totalPrice = subTotal + tax;
  //update on the html
  document.getElementById('sub-total').innerText = subTotal;
  document.getElementById('tex-amount').innerText = tax;
  document.getElementById('total-price').innerText = totalPrice;

}
// phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function() {
  updatProductNumber('phone', 1219, true);  
});
document.getElementById('phone-minus').addEventListener('click', function() {
    updatProductNumber('phone', 1219, false);
});

// handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function() {
    
    updatProductNumber('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function() {
   updatProductNumber('case', 59, false);
    

});