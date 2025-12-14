// Just Listed Properties (10) with unique IDs starting from 31
const justListedProperties = [
  { id: 31, title: "3 Bedroom Apartment in Lekki", price: "₦45,000,000", image: "img/house-8458547.jpg", tags: ["new", "featured"] },
  { id: 32, title: "4 Bedroom Duplex in Ajah", price: "₦65,000,000", image: "img/house-8458547.jpg", tags: ["hot", "premium"] },
  { id: 33, title: "2 Bedroom Mini Flat in Ikeja", price: "₦25,000,000", image: "img/house-8458547.jpg", tags: ["new"] },
  { id: 34, title: "5 Bedroom Mansion in Victoria Island", price: "₦120,000,000", image: "img/house-8458547.jpg", tags: ["premium", "featured"] },
  { id: 35, title: "3 Bedroom Terrace in Lekki", price: "₦40,000,000", image: "img/house-8458547.jpg", tags: ["hot"] },
  { id: 36, title: "2 Bedroom Apartment in Ajah", price: "₦28,000,000", image: "img/house-8458547.jpg", tags: ["new"] },
  { id: 37, title: "3 Bedroom Duplex in Lekki", price: "₦55,000,000", image: "img/house-8458547.jpg", tags: ["premium"] },
  { id: 38, title: "1 Bedroom Apartment in Ikeja", price: "₦18,000,000", image: "img/house-8458547.jpg", tags: ["new", "featured"] },
  { id: 39, title: "4 Bedroom Mansion in Victoria Island", price: "₦110,000,000", image: "img/house-8458547.jpg", tags: ["hot", "featured"] },
  { id: 40, title: "2 Bedroom Terrace in Lekki", price: "₦35,000,000", image: "img/house-8458547.jpg", tags: ["new", "premium"] }
];

// Render Just Listed Cards
function renderJustListed() {
  const grid = document.getElementById("just-listed-grid");
  if (!grid) return;

  justListedProperties.forEach(prop => {
    const card = document.createElement("div");
    card.classList.add("property-card");

    // Tags
    const tagsHTML = prop.tags.map(tag => `<span class="property-tag ${tag}">${tag.replace(/^\w/, c => c.toUpperCase())}</span>`).join('');

    card.innerHTML = `
      <div class="property-tags">${tagsHTML}</div>
      <img src="${prop.image}" alt="${prop.title}">
      <div class="property-content">
        <h3>${prop.title}</h3>
        <p class="property-price">${prop.price}</p>
        <a href="property-details.html?id=${prop.id}" class="property-cta">View Details</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Load after DOM
window.addEventListener("DOMContentLoaded", renderJustListed);
