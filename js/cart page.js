function showPaymentOption(option) {
  // Hide all payment options
  var paymentOptions = document.querySelectorAll('.payment-option');
  paymentOptions.forEach(function(option) {
    option.style.display = 'none';
  });

  // Show the selected payment option
  document.getElementById(option + 'Option').style.display = 'block';
}