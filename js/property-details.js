const properties = [
  {
    id: 1,
    title: "3 Bedroom Apartment in Lekki",
    images: ["img/house-8458547.jpg", "img/house-8458547.jpg", "img/house-8458547.jpg"],
    floorPlan: "img/house-8458547.jpg",
    amenities: ["24/7 Security", "Gym", "Swimming Pool", "Balcony", "Parking"],
    map: "https://maps.google.com/?q=Rumueme&output=embed",
    virtualTour: "https://my.virtualtour.com/embed/property1"
  },
  {
    id: 2,
    title: "4 Bedroom Duplex in Ajah",
    images: ["img/house-8458547.jpg", "img/house-8458547.jpg", "img/house-8458547.jpg"],
    floorPlan: "img/house-8458547.jpg",
    amenities: ["Security", "Garden", "Parking", "Gym", "Balcony"],
    map: "https://maps.google.com/?q=Ajah&output=embed",
    virtualTour: "https://my.virtualtour.com/embed/property2"
  },
  {
    id: 3,
    title: "2 Bedroom Mini Flat in Ikeja",
    images: ["images/property3-1.jpg", "images/property3-2.jpg", "images/property3-3.jpg"],
    floorPlan: "images/property3-floorplan.jpg",
    amenities: ["Gym", "Parking", "Balcony"],
    map: "https://maps.google.com/?q=Ikeja&output=embed",
    virtualTour: "https://my.virtualtour.com/embed/property3"
  },
  {
    id: 4,
    title: "5 Bedroom Mansion in Victoria Island",
    images: ["images/property4-1.jpg", "images/property4-2.jpg", "images/property4-3.jpg"],
    floorPlan: "images/property4-floorplan.jpg",
    amenities: ["Pool", "Gym", "Garden", "Security"],
    map: "https://maps.google.com/?q=Victoria+Island&output=embed",
    virtualTour: "https://my.virtualtour.com/embed/property4"
  },
  {
    id: 5,
    title: "3 Bedroom Terrace in Lekki",
    images: ["images/property5-1.jpg", "images/property5-2.jpg", "images/property5-3.jpg"],
    floorPlan: "images/property5-floorplan.jpg",
    amenities: ["Security", "Parking", "Balcony"],
    map: "https://maps.google.com/?q=Lekki&output=embed",
    virtualTour: "https://my.virtualtour.com/embed/property5"
  },
  {
    id: 6,
    title: "2 Bedroom Apartment in Ajah",
    images: ["images/property6-1.jpg", "images/property6-2.jpg", "images/property6-3.jpg"],
    floorPlan: "images/property6-floorplan.jpg",
    amenities: ["Balcony", "Security", "Gym"],
    map: "https://maps.google.com/?q=Ajah&output=embed",
    virtualTour: "https://my.virtualtour.com/embed/property6"
  },
  {
    id: 7,
    title: "3 Bedroom Duplex in Lekki",
    images: ["images/property7-1.jpg", "images/property7-2.jpg", "images/property7-3.jpg"],
    floorPlan: "images/property7-floorplan.jpg",
    amenities: ["Pool", "Garden", "Gym", "Parking"],
    map: "https://maps.google.com/?q=Lekki&output=embed",
    virtualTour: "https://my.virtualtour.com/embed/property7"
  },
  {
    id: 8,
    title: "1 Bedroom Apartment in Ikeja",
    images: ["images/property8-1.jpg", "images/property8-2.jpg", "images/property8-3.jpg"],
    floorPlan: "images/property8-floorplan.jpg",
    amenities: ["Gym", "Parking"],
    map: "https://maps.google.com/?q=Ikeja&output=embed",
    virtualTour: "https://my.virtualtour.com/embed/property8"
  },
  {
    id: 9,
    title: "4 Bedroom Mansion in Victoria Island",
    images: ["images/property9-1.jpg", "images/property9-2.jpg", "images/property9-3.jpg"],
    floorPlan: "images/property9-floorplan.jpg",
    amenities: ["Pool", "Gym", "Security", "Parking"],
    map: "https://maps.google.com/?q=Victoria+Island&output=embed",
    virtualTour: "https://my.virtualtour.com/embed/property9"
  },
  {
    id: 10,
    title: "2 Bedroom Terrace in Lekki",
    images: ["images/property10-1.jpg", "images/property10-2.jpg", "images/property10-3.jpg"],
    floorPlan: "images/property10-floorplan.jpg",
    amenities: ["Balcony", "Parking", "Security"],
    map: "https://maps.google.com/?q=Lekki&output=embed",
    virtualTour: "https://my.virtualtour.com/embed/property10"
  },
   { id: 31, title: "3 Bedroom Apartment in Lekki", price: "₦45,000,000", images: ["images/property1-1.jpg","images/property1-2.jpg","images/property1-3.jpg"], description: "Modern apartment in Lekki, ideal for families.", floorPlan: "images/property1-floorplan.jpg", amenities: ["Swimming Pool","Gym","24/7 Security"], map: "https://maps.google.com/?q=Lekki", contact: "contact@example.com", virtualTour: "" },
  { id: 32, title: "4 Bedroom Duplex in Ajah", price: "₦65,000,000", images: ["images/property2-1.jpg","images/property2-2.jpg","images/property2-3.jpg"], description: "Luxury duplex with ample space for your family.", floorPlan: "images/property2-floorplan.jpg", amenities: ["Parking","Gym","Garden"], map: "https://maps.google.com/?q=Ajah", contact: "contact@example.com", virtualTour: "" },
  { id: 33, title: "2 Bedroom Mini Flat in Ikeja", price: "₦25,000,000", images: ["images/property3-1.jpg","images/property3-2.jpg"], description: "Cozy mini flat, fully furnished.", floorPlan: "images/property3-floorplan.jpg", amenities: ["24/7 Security","Parking"], map: "https://maps.google.com/?q=Ikeja", contact: "contact@example.com", virtualTour: "" },
  { id: 34, title: "5 Bedroom Mansion in Victoria Island", price: "₦120,000,000", images: ["images/property4-1.jpg","images/property4-2.jpg"], description: "Spacious mansion with private pool and garden.", floorPlan: "images/property4-floorplan.jpg", amenities: ["Swimming Pool","Private Garden","Gym"], map: "https://maps.google.com/?q=Victoria+Island", contact: "contact@example.com", virtualTour: "" },
  { id: 35, title: "3 Bedroom Terrace in Lekki", price: "₦40,000,000", images: ["images/property5-1.jpg","images/property5-2.jpg"], description: "Modern terrace home, perfect for families.", floorPlan: "images/property5-floorplan.jpg", amenities: ["Parking","Gym","Security"], map: "https://maps.google.com/?q=Lekki", contact: "contact@example.com", virtualTour: "" },
  { id: 36, title: "2 Bedroom Apartment in Ajah", price: "₦28,000,000", images: ["images/property6-1.jpg","images/property6-2.jpg"], description: "Compact apartment in a prime location.", floorPlan: "images/property6-floorplan.jpg", amenities: ["Parking","Security"], map: "https://maps.google.com/?q=Ajah", contact: "contact@example.com", virtualTour: "" },
  { id: 37, title: "3 Bedroom Duplex in Lekki", price: "₦55,000,000", images: ["images/property7-1.jpg","images/property7-2.jpg"], description: "Modern duplex with elegant interiors.", floorPlan: "images/property7-floorplan.jpg", amenities: ["Swimming Pool","Gym"], map: "https://maps.google.com/?q=Lekki", contact: "contact@example.com", virtualTour: "" },
  { id: 38, title: "1 Bedroom Apartment in Ikeja", price: "₦18,000,000", images: ["images/property8-1.jpg","images/property8-2.jpg"], description: "Perfect apartment for singles or couples.", floorPlan: "images/property8-floorplan.jpg", amenities: ["Parking","Security"], map: "https://maps.google.com/?q=Ikeja", contact: "contact@example.com", virtualTour: "" },
  { id: 39, title: "4 Bedroom Mansion in Victoria Island", price: "₦110,000,000", images: ["images/property9-1.jpg","images/property9-2.jpg"], description: "Luxury mansion with top-class amenities.", floorPlan: "images/property9-floorplan.jpg", amenities: ["Gym","Private Pool","Garden"], map: "https://maps.google.com/?q=Victoria+Island", contact: "contact@example.com", virtualTour: "" },
  { id: 40, title: "2 Bedroom Terrace in Lekki", price: "₦35,000,000", images: ["images/property10-1.jpg","images/property10-2.jpg"], description: "Cozy terrace in a great location.", floorPlan: "images/property10-floorplan.jpg", amenities: ["Parking","Security"], map: "https://maps.google.com/?q=Lekki", contact: "contact@example.com", virtualTour: "" }
];

// Get property ID from URL
function getPropertyId() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get("id")) || 1;
}

// Load property details dynamically
function loadPropertyDetails() {
  const id = getPropertyId();
  const property = properties.find(p => p.id === id);
  if (!property) return;

  document.getElementById("property-title").innerText = property.title;

  // Inject images
  const imagesContainer = document.getElementById("property-images");
  imagesContainer.innerHTML = "";
  property.images.forEach(src => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    slide.innerHTML = `<img src="${src}" alt="${property.title}">`;
    imagesContainer.appendChild(slide);
  });

  // Floor plan
  document.getElementById("floor-plan").src = property.floorPlan;

  // Amenities
  const amenitiesList = document.getElementById("amenities-list");
  amenitiesList.innerHTML = "";
  property.amenities.forEach(a => {
    const li = document.createElement("li");
    li.textContent = a;
    amenitiesList.appendChild(li);
  });

  // Map
  document.getElementById("property-map").src = property.map;

  // Virtual tour
  document.getElementById("virtual-tour").src = property.virtualTour;

  // Initialize Swiper after slides are added
  new Swiper(".swiper", {
    loop: true,
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    pagination: { el: ".swiper-pagination", clickable: true }
  });
}

window.addEventListener("DOMContentLoaded", loadPropertyDetails);

