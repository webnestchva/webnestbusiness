// Function to filter search results based on user input
function filterItems() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const searchResults = document.getElementById("search-results");
    searchResults.innerHTML = ""; // Clear previous results
  
    if (!query) {
      searchResults.style.display = "none"; // Hide results if there's no query
      return;
    }
  
    searchResults.style.display = "block"; // Show dropdown if there's a query
  
    const restaurantOptions = [
      { id: 'topsChina', name: "Top's China", url: "Top's China/index.html" },
      // Add more restaurants here as needed
    ];
  
    restaurantOptions.forEach((restaurant) => {
      if (restaurant.name.toLowerCase().includes(query)) {
        const listItem = document.createElement("li");
        listItem.textContent = restaurant.name;
        listItem.onclick = () => {
          window.location.href = restaurant.url; // Redirect to restaurant menu
        };
        searchResults.appendChild(listItem);
      }
    });
  }
  
