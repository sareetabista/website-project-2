 // JavaScript code
 document.getElementById("orderButton").addEventListener("mouseenter", function() {
  // Move upper two images downwards and bottom two images upwards towards the button smoothly
  document.querySelectorAll(".pizza-images img").forEach(function(img) {
    if (img.getBoundingClientRect().top < window.innerHeight / 2) {
      img.style.transform = "translateY(50%) scale(1.4)"; /* Enlarge and move downwards */
    } else {
      img.style.transform = "translateY(-50%) scale(1.4)"; /* Enlarge and move upwards */
    }
  });
});

document.getElementById("orderButton").addEventListener("mouseleave", function() {
  // Reset image positions when mouse leaves the button
  document.querySelectorAll(".pizza-images img").forEach(function(img) {
    img.style.transform = "none";
  });
});


document.addEventListener("DOMContentLoaded", function() {
  // Function to handle size selection
  document.querySelectorAll('input[type=radio][name=size]').forEach(function(input) {
    input.addEventListener('change', function() {
      // Get the selected size
      var selectedSize = this.value;

      // Object to store prices for different pizzas and sizes
      var prices = {
        'neapolitan': {
          'small': 8,
          'medium': 10,
          'large': 12
        },
        'margherita': {
          'small': 7,
          'medium': 9,
          'large': 11
        },
        // Add more pizzas and their respective prices here
      };

      // Get the selected pizza
      var selectedPizza = this.closest('tr').getAttribute('data-pizza');

      // Update the price based on the selected size and pizza
      var price = prices[selectedPizza][selectedSize];
      this.closest('tr').querySelector('.price').textContent = '$' + price.toFixed(2); // Display the updated price
    });
  });
});