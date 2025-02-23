const itemOptions = {
    // Appetizers
    butterGlazedBiscuits: {
      name: "Butter Glazed Biscuits",
      options: [{ label: "Regular", price: 6.00 }]
    },
    soupOfTheDay: {
      name: "Soup of the Day",
      options: [{ label: "Regular", price: 10.00 }]
    },
    crispyBrussels: {
      name: "Crispy Brussels",
      options: [{ label: "Regular", price: 12.00 }]
    },
    seafoodGumboCup: {
      name: "Seafood Gumbo Cup",
      options: [{ label: "Regular", price: 15.00 }]
    },
    deviledEggs: {
      name: "Deviled Eggs",
      options: [{ label: "Regular", price: 15.00 }]
    },
    honeyOldBayWings: {
      name: "Honey Old Bay Wings",
      options: [{ label: "Regular", price: 16.00 }]
    },
    miniSalmonCakes: {
      name: "Mini Salmon Cakes",
      options: [{ label: "Regular", price: 17.00 }]
    },
  
    // Lighter
    seasonalFruitGranola: {
      name: "Seasonal Fruit, Yogurt, & Granola",
      options: [{ label: "Regular", price: 12.00 }]
    },
    avocadoToast: {
      name: "Avocado Toast",
      options: [
        { label: "Regular", price: 14.00 },
        { label: "With Smoked Salmon", price: 19.00 }
      ]
    },
    powerBowl: {
      name: "Power Bowl",
      options: [{ label: "Regular", price: 18.00 }]
    },
    eggWhiteOmelette: {
      name: "Egg White Omelette",
      options: [{ label: "Regular", price: 20.00 }]
    },
  
    // Salads (with additional protein options)
    cajunCaesarSalad: {
      name: "Cajun Caesar Salad",
      options: [
        { label: "Regular", price: 12.00 },
        { label: "With Chicken", price: 22.00 },
        { label: "With Shrimp", price: 24.00 },
        { label: "With Salmon", price: 27.00 },
        { label: "With Lobster", price: 34.00 }
      ]
    },
    kaleWatermelonSalad: {
      name: "Kale Watermelon Salad",
      options: [
        { label: "Regular", price: 15.00 },
        { label: "With Chicken", price: 25.00 },
        { label: "With Shrimp", price: 27.00 },
        { label: "With Salmon", price: 30.00 },
        { label: "With Lobster", price: 37.00 }
      ]
    },
     // Mains
  berryFrenchToast: {
    name: "Berry French Toast",
    options: [{ label: "Regular", price: 17.00 }]
  },
  cheesecakePancakes: {
    name: "Cheesecake Pancakes",
    options: [{ label: "Regular", price: 20.00 }]
  },
  theTraditional: {
    name: "The Traditional",
    options: [
      { label: "Regular", price: 22.00 },
      { label: "With Bacon", price: 22.00 },
      { label: "With Turkey Bacon", price: 22.00 },
      { label: "With Half-Smoke", price: 22.00 },
      { label: "With Turkey Sausage", price: 22.00 }
    ]
  },
  chickenBiscoffWaffles: {
    name: "Chicken & Biscoff Waffles",
    options: [
      { label: "Regular", price: 23.00 },
      { label: "With Wings", price: 27.00 }
    ]
  },
  crispySalmonHash: {
    name: "Crispy Salmon Hash",
    options: [{ label: "Regular", price: 24.00 }]
  },
  jumboSmotheredChickenBiscuits: {
    name: "Jumbo Smothered Chicken & Biscuits",
    options: [{ label: "Regular", price: 21.00 }]
  },
  theWharfScramble: {
    name: "The Wharf Scramble",
    options: [{ label: "Regular", price: 25.00 }]
  },
  carolinaLowCountryGumbo: {
    name: "Carolina Low Country Gumbo",
    options: [{ label: "Regular", price: 28.00 }]
  },
  panSearedSalmonGrits: {
    name: "Pan Seared Salmon & Grits",
    options: [{ label: "Regular", price: 24.00 }]
  },
  tailOfTwoFish: {
    name: "Tail of Two Fish",
    options: [{ label: "Regular", price: 24.00 }]
  },
  chefSammysShrimpGrits: {
    name: "Chef Sammy’s Award-Winning Shrimp & Grits",
    options: [{ label: "Regular", price: 25.00 }]
  },
  houseRubbedSteakEggs: {
    name: "House Rubbed Steak with Eggs",
    options: [{ label: "Regular", price: 35.00 }]
  },
  cajunSeafoodPasta: {
    name: "Cajun Seafood Pasta",
    options: [{ label: "Regular", price: 35.00 }]
  },
  crabcakeBenedict: {
    name: "Crabcake Benedict",
    options: [{ label: "Regular", price: 35.00 }]
  },
  // Sandwiches
  crispyChickenSandwich: {
    name: "Crispy Chicken Sandwich",
    options: [{ label: "Regular", price: 17.00 }]
  },
  portobelloMushroomSandwich: {
    name: "Portobello Mushroom Sandwich",
    options: [{ label: "Regular", price: 17.00 }]
  },
  crispyFishSandwich: {
    name: "Crispy Fish Sandwich",
    options: [{ label: "Regular", price: 16.00 }]
  },
  blackenedSalmonBLT: {
    name: "Blackened Salmon BLT",
    options: [{ label: "Regular", price: 20.00 }]
  },
  crabCakeSandwich: {
    name: "Crab Cake Sandwich",
    options: [{ label: "Market Price", price: "MKT" }]
  },

  // Sides
  cheeseEggs: {
    name: "Cheese Eggs",
    options: [{ label: "Regular", price: 6.00 }]
  },
  cheesyHash: {
    name: "Cheesy Hash",
    options: [{ label: "Regular", price: 6.00 }]
  },
  cheeseGrits: {
    name: "Cheese Grits",
    options: [{ label: "Regular", price: 6.00 }]
  },
  taterTots: {
    name: "Tater Tots",
    options: [{ label: "Regular", price: 6.00 }]
  },
  crispySmashedPotatoes: {
    name: "Crispy Smashed Potatoes",
    options: [{ label: "Regular", price: 6.00 }]
  },
  bacon: {
    name: "Bacon",
    options: [{ label: "Regular", price: 6.00 }]
  },
  turkeyBacon: {
    name: "Turkey Bacon",
    options: [{ label: "Regular", price: 6.00 }]
  },
  turkeySausage: {
    name: "Turkey Sausage",
    options: [{ label: "Regular", price: 6.00 }]
  },
  halfSmoke: {
    name: "Half-Smoke",
    options: [{ label: "Regular", price: 6.00 }]
  },
  biscoffWaffles: {
    name: "Biscoff Waffles",
    options: [{ label: "Regular", price: 15.00 }]
  },

  // Desserts
  sweetPotatoBreadPudding: {
    name: "Sweet Potato Bread Pudding",
    options: [{ label: "Regular", price: 10.00 }]
  },
  peachCobblerHandPie: {
    name: "Peach Cobbler Hand Pie",
    options: [{ label: "Regular", price: 10.00 }]
  },
  bananaCheesecakePudding: {
    name: "Banana Cheesecake Pudding",
    options: [{ label: "Regular", price: 10.00 }]
  },
  fiveLayerChocolateCake: {
    name: "5 Layer Chocolate Cake",
    options: [{ label: "Regular", price: 10.00 }]
  },
   // Dinner Appetizers
   butterGlazedBiscuits: {
    name: "Butter Glazed Biscuits",
    options: [{ label: "Regular", price: 6.00 }]
  },
  crispyBrussels: {
    name: "Crispy Brussels",
    options: [{ label: "Regular", price: 12.00 }]
  },
  deviledEggs: {
    name: "Deviled Eggs",
    options: [{ label: "Regular", price: 15.00 }]
  },
  honeyOldBayWings: {
    name: "Honey Old Bay Wings",
    options: [{ label: "Regular", price: 16.00 }]
  },
  miniSalmonCakes: {
    name: "Mini Salmon Cakes",
    options: [{ label: "Regular", price: 17.00 }]
  },

  // Dinner Soups & Salads (With Protein Additions)
  soupOfTheDay: {
    name: "Soup of the Day",
    options: [{ label: "Regular", price: 10.00 }]
  },
  kaleWatermelonSalad: {
    name: "Kale Watermelon Salad",
    options: [
      { label: "Regular", price: 15.00 },
      { label: "Add Chicken", price: 10.00 },
      { label: "Add Shrimp", price: 12.00 },
      { label: "Add Salmon", price: 15.00 },
      { label: "Add Crispy Lobster", price: 22.00 }
    ]
  },
  cajunCaesarSalad: {
    name: "Cajun Caesar Salad",
    options: [
      { label: "Regular", price: 12.00 },
      { label: "Add Chicken", price: 10.00 },
      { label: "Add Shrimp", price: 12.00 },
      { label: "Add Salmon", price: 15.00 },
      { label: "Add Crispy Lobster", price: 22.00 }
    ]
  },
  seafoodGumboCup: {
    name: "Seafood Gumbo Cup",
    options: [{ label: "Regular", price: 15.00 }]
  },

  // Dinner Lighter Options
  veggieBowl: {
    name: "Veggie Bowl",
    options: [{ label: "Regular", price: 21.00 }]
  },
  panSearedSalmon: {
    name: "Pan Seared Salmon",
    options: [{ label: "Regular", price: 23.00 }]
  },
  grilledShrimpBowl: {
    name: "Grilled Shrimp Bowl",
    options: [{ label: "Regular", price: 23.00 }]
  },

  // Dinner Mains
  shrimpAndGrits: {
    name: "Chef Sammy’s Award-Winning Shrimp & Grits",
    options: [{ label: "Regular", price: 25.00 }]
  },
  chickenBiscoffWaffle: {
    name: "Chicken & Biscoff Waffle",
    options: [{ label: "Regular", price: 23.00 }]
  },
  lowCountryGumbo: {
    name: "Carolina Low Country Gumbo",
    options: [{ label: "Regular", price: 26.00 }]
  },
  tailOfTwoFish: {
    name: "Tail of Two Fish",
    options: [{ label: "Regular", price: 24.00 }]
  },
  signatureSteak: {
    name: "M&H Signature Steak",
    options: [{ label: "Regular", price: 35.00 }]
  },
  cajunSeafoodPasta: {
    name: "Cajun Seafood Pasta",
    options: [{ label: "Regular", price: 35.00 }]
  },
  jerkLambChops: {
    name: "Caribbean Jerk Lamb Chops",
    options: [{ label: "Regular", price: 42.00 }]
  },
  // Dinner Sides
  frenchFries: {
    name: "French Fries",
    options: [{ label: "Regular", price: 6.00 }]
  },
  broccolini: {
    name: "Broccolini",
    options: [{ label: "Regular", price: 8.00 }]
  },
  crispySmashedPotatoes: {
    name: "Crispy Smashed Potatoes",
    options: [{ label: "Regular", price: 8.00 }]
  },
  braisedSpicyKale: {
    name: "Braised Spicy Kale",
    options: [{ label: "Regular", price: 8.00 }]
  },
  asparagus: {
    name: "Asparagus",
    options: [{ label: "Regular", price: 8.00 }]
  },
  redBeansAndRice: {
    name: "Red Beans & Rice",
    options: [{ label: "Regular", price: 8.00 }]
  },

  // Dinner Sandwiches
  crispyFishSandwich: {
    name: "Crispy Fish Sandwich",
    options: [{ label: "Regular", price: 16.00 }]
  },
  portobelloMushroomSandwich: {
    name: "Portobello Mushroom Sandwich",
    options: [{ label: "Regular", price: 17.00 }]
  },
  crispyChickenSandwich: {
    name: "Crispy Chicken Sandwich",
    options: [{ label: "Regular", price: 17.00 }]
  },
  blackenedSalmonBLT: {
    name: "Blackened Salmon BLT",
    options: [{ label: "Regular", price: 20.00 }]
  },
  crabCakeSandwich: {
    name: "Crab Cake Sandwich",
    options: [{ label: "Market Price", price: "MKT" }]
  },

  // Dinner Desserts
  bananaCheesecakePudding: {
    name: "Banana Cheesecake Pudding",
    options: [{ label: "Regular", price: 10.00 }]
  },
  fiveLayerChocolateCake: {
    name: "5 Layer Chocolate Cake",
    options: [{ label: "Regular", price: 10.00 }]
  },
  peachCobblerHandPie: {
    name: "Peach Cobbler Hand Pie",
    options: [{ label: "Regular", price: 10.00 }]
  },
  sweetPotatoBreadPudding: {
    name: "Sweet Potato Bread Pudding",
    options: [{ label: "Regular", price: 10.00 }]
  }
  };
  

    
  let selectedItem = null; // Track the current item
  let itemQuantity = 1; // Track the item quantity
  let currentPrice = 0; // Track the current price of the selected option
  
  // Function to increase quantity
  function increaseQuantity() {
  itemQuantity += 1;
  updateQuantityDisplay();
  updateTotalPrice(currentPrice); // Update total with the current price and quantity
  }
  
  // Function to decrease quantity
  function decreaseQuantity() {
  if (itemQuantity > 1) {
    itemQuantity -= 1;
    updateQuantityDisplay();
    updateTotalPrice(currentPrice); // Update total with the current price and quantity
  }
  }
  
  // Function to open the modal with item details
  function openModal(itemId) {
  selectedItem = itemOptions[itemId];
  document.getElementById('item-name').textContent = selectedItem.name;
  
  // Reset quantity for new item selection
  itemQuantity = 1;
  updateQuantityDisplay();
  
  // Generate options for this item
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = ""; // Clear previous options
  
  selectedItem.options.forEach((option, index) => {
    const optionLabel = document.createElement("label");
    optionLabel.className = "option-label";
  
    const optionInput = document.createElement("input");
    optionInput.type = "radio";
    optionInput.name = "option";
    optionInput.value = option.price;
    optionInput.checked = index === 0; // Check the first option by default
  
    // Bind the price update to the radio change event
    optionInput.addEventListener("change", function() {
      currentPrice = parseFloat(option.price); // Update current price to selected option
      updateTotalPrice(currentPrice);
    });
  
    optionLabel.appendChild(optionInput);
    optionLabel.appendChild(document.createTextNode(` ${option.label} - $${option.price.toFixed(2)}`));
    optionsContainer.appendChild(optionLabel);
  });
  
  // Set initial total price to the price of the first option
  currentPrice = selectedItem.options[0].price;
  updateTotalPrice(currentPrice);
  
  // Display the modal
  document.getElementById('itemModal').style.display = 'block';
  }
  
  // Function to update total price based on selected option and quantity
  function updateTotalPrice(price) {
  document.getElementById('total-price').textContent = `$${(price * itemQuantity).toFixed(2)}`;
  }
  
  // Function to update quantity display
  function updateQuantityDisplay() {
  document.getElementById('item-quantity').textContent = itemQuantity;
  }
  
  // Function to close the modal
  function closeModal() {
  document.getElementById('itemModal').style.display = 'none';
  }
  
  // Function to add the item to the cart with the selected option and quantity
  function addToCart() {
  if (!selectedItem) return;
  
  const itemName = selectedItem.name;
  const quantity = itemQuantity;
  const selectedOption = document.querySelector('input[name="option"]:checked').nextSibling.textContent.trim();
  
  const totalPrice = currentPrice * quantity;
  
  // Check if an identical item with the same name and option already exists in the cart
  const existingItem = cart.find(item => item.name === itemName && item.option === selectedOption);
  
  if (existingItem) {
    existingItem.quantity += quantity; // Increment quantity
  } else {
    cart.push({ name: itemName, price: currentPrice, quantity, option: selectedOption });
  }
  
  if (!cartVisible) {
    document.getElementById("cart").style.display = "flex";
    cartVisible = true; 
  }
  
  updateCartDisplay();
  closeModal();
  }
  
  
  // Cart data
  let cart = [];
  const TAX_RATE = 0.1; // Example tax rate
  let cartVisible = false; // Track cart visibility
  
  function updateCartDisplay() {
  // Calculate total item count for the cart display
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0);
  document.getElementById("cart-count").textContent = `Cart: ${itemCount} items`;
  
  // Generate item list
  const cartItemsList = document.getElementById("cart-items");
  cartItemsList.innerHTML = ''; // Clear previous list
  
  let subtotal = 0;
  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
  
    // Create list item with quantity on the left side, option without the price, "Add" and "Delete" buttons
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      ${item.quantity}x ${item.name} ${item.option ? `(${item.option.split(" ")[0]})` : ''}: $${itemTotal.toFixed(2)}
      <button onclick="addToCartFromCart(${index})" class="add-btn">+</button>
      <button onclick="removeFromCart(${index})" class="delete-btn">x</button>
    `;
    cartItemsList.appendChild(listItem);
  });
  
  // Calculate tax and total
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;
  
  // Update the summary
  document.getElementById("subtotal").textContent = `Subtotal: $${subtotal.toFixed(2)}`;
  document.getElementById("tax").textContent = `Tax: $${tax.toFixed(2)}`;
  document.getElementById("total").textContent = `Total: $${total.toFixed(2)}`;
  }
  
  
  function addToCartFromCart(index) {
  // Increment the quantity of the specified item
  cart[index].quantity += 1;
  
  // Update the cart display
  updateCartDisplay();
  }
  
  
  function removeFromCart(index) {
  // If quantity is more than 1, decrement it; otherwise, remove the item
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  } else {
    cart.splice(index, 1); // Remove the item completely if quantity is 1
  }
  
  updateCartDisplay(); // Update cart display after deletion
  }
  
  // Toggle cart details visibility
  function toggleCartDetails() {
  const cartDetails = document.getElementById("cart-details");
  cartDetails.style.display = cartDetails.style.display === "flex" ? "none" : "flex";
  }
  
  // Ensure the cart is hidden on page load
  window.onload = function() {
  document.getElementById("cart-details").style.display = "none";
  }
  
  document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".menu-category");
  const navLinks = document.querySelectorAll(".menu-categories ul li a");
  const menuCategoriesContainer = document.querySelector(".menu-categories");
  
  function setActiveLink() {
    let index = sections.length;
  
    // Loop through each section to find the one in the viewport
    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
    // Remove the "active" class from all links
    navLinks.forEach((link) => link.classList.remove("active"));
  
    // Add the "active" class to the current section's link
    navLinks[index].classList.add("active");
  
    // Scroll the active link to the start of the visible area
    adjustScrollToActiveLink(index);
  }
  
  function adjustScrollToActiveLink(activeIndex) {
    const activeLink = navLinks[activeIndex];
    const linkWidth = activeLink.getBoundingClientRect().width;
    const containerWidth = menuCategoriesContainer.getBoundingClientRect().width;
    const scrollAmount = activeLink.offsetLeft - menuCategoriesContainer.scrollLeft;
  
    // Adjust the scroll position if the active link is not at the start
    if (scrollAmount > containerWidth - linkWidth || scrollAmount < 0) {
      menuCategoriesContainer.scrollLeft = activeLink.offsetLeft;
    }
  
    // Stop further scrolling if near the end
    const totalContentWidth = navLinks[navLinks.length - 1].offsetLeft + linkWidth;
    if (menuCategoriesContainer.scrollLeft + containerWidth >= totalContentWidth) {
      menuCategoriesContainer.scrollLeft = totalContentWidth - containerWidth;
    }
  }
  
  // Run setActiveLink on page load and scroll
  setActiveLink();
  window.addEventListener("scroll", setActiveLink);
  });
  
  
  
  function openSearchOverlay() {
  document.getElementById("search-overlay").style.display = "flex";
  document.getElementById("search-input").focus(); // Focus on input when opening
  }
  
  function closeSearchOverlay() {
  document.getElementById("search-overlay").style.display = "none";
  document.getElementById("search-input").value = ""; // Clear search input
  document.getElementById("search-results").innerHTML = ""; // Clear search results
  }
  
  function filterItems() {
  const query = document.getElementById("search-input").value.toLowerCase();
  const searchResults = document.getElementById("search-results");
  searchResults.innerHTML = ""; // Clear previous results
  
  if (!query) {
    searchResults.style.display = "none"; // Hide results if there's no query
    return;
  }
  
  // Show dropdown if there's a query
  searchResults.style.display = "block";
  
  // Loop through each item and find matches by name
  Object.keys(itemOptions).forEach((itemId) => {
    const item = itemOptions[itemId];
    if (item.name.toLowerCase().includes(query)) {
      // Create a search result list item with the item name
      const listItem = document.createElement("li");
      listItem.textContent = item.name;
  
      // Set onclick to navigate to the item and open the modal
      listItem.onclick = () => {
        navigateToItem(itemId); // Scroll to the item section
        openModal(itemId);      // Open the add-to-cart modal
        closeSearchOverlay();    // Close the search overlay
      };
  
      searchResults.appendChild(listItem); // Add to search results
    }
  });
  }
  
  function navigateToItem(itemId) {
  // Scroll to the item on the page
  const targetItem = document.getElementById(itemId);
  if (targetItem) {
    targetItem.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
  }
  
  
  // Sample function to populate options based on optionsData format
  function populateOptions(options) {
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = ''; // Clear previous options if any
  
  options.forEach(option => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';
  
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'option';
    input.id = option.label;
    input.value = option.price;
  
    const label = document.createElement('label');
    label.htmlFor = option.label;
    label.textContent = `${option.label} - $${option.price.toFixed(2)}`;
  
    optionDiv.appendChild(input);
    optionDiv.appendChild(label);
    optionsContainer.appendChild(optionDiv);
  });
  }
  
  let secretNumber;
  let numberChangeInterval;
  
  // Function to show the guessing game modal
  function showGuessGame() {
  document.getElementById("guess-game-modal").style.display = "block";
  }
  
  // Function to close the guessing game modal
  function closeGuessGame() {
  document.getElementById("guess-game-modal").style.display = "none";
  document.getElementById("guess-input").value = ""; // Clear input
  document.getElementById("guess-message").textContent = ""; // Clear message
  }
  
  // Function to close the congratulations popup
  function closeCongratsPopup() {
  document.getElementById("congrats-popup").style.display = "none";
  }
  
  // Function to set a new random number every 5 minutes
  // Function to set a new random number every 5 minutes
  function setRandomNumber() {
  secretNumber = Math.floor(Math.random() * 40) + 1; // Random number between 1 and 50
  document.getElementById("secret-number").textContent = secretNumber; // Update debug section
  document.getElementById("debug-answer").style.display = "block"; // Show secret number for testing
  }
  
  
  // Function to start the number change interval
  function startNumberChangeInterval() {
  setRandomNumber(); // Set the initial number
  setInterval(setRandomNumber, 5000); // Update number every 5 seconds
  }
  
  // Function to handle the guess submission
  function submitGuess() {
  const userGuess = parseInt(document.getElementById("guess-input").value);
  const messageElement = document.getElementById("guess-message");
  
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    messageElement.textContent = "Please enter a valid number between 1 and 40.";
    return;
  }
  
  if (userGuess === secretNumber) {
    closeGuessGame(); // Close the guessing game modal
    document.getElementById("congrats-popup").style.display = "block"; // Show the congratulations popup
  } else {
    messageElement.textContent = "Try again! The number has not been guessed yet.";
  }
  }
  
  // Start the number change interval when the page loads
  window.onload = function () {
  startNumberChangeInterval();
  };
  
  