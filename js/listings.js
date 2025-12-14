// ===========================
// ADVANCED FILTER BAR LOGIC
// ===========================

document.getElementById("filterForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const filters = {
    location: document.getElementById("location").value,
    type: document.getElementById("type").value,
    price: document.getElementById("price").value,
    bedrooms: document.getElementById("bedrooms").value
  };

  console.log("Filters applied:", filters);

  // You can later connect this to:
  // - AJAX requests
  // - Backend endpoints
  // - Filtering local JS property data
  // - Updating property grid dynamically

  alert("Search Filters Applied ✔️\n\nCheck console for filter details.");
});

