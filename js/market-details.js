document.addEventListener('DOMContentLoaded', () => {

  // ======= Marketplace Items =======
  const products = [];
  for(let i=1; i<=40; i++){
    products.push({
      id: i,
      name: `Item ${i}`,
      price: i * 100000, // example price
      description: `This is a detailed description for Item ${i}. It highlights features and key selling points.`,
      tag: i % 2 === 0 ? "Hot Deal" : "New",
      gallery: [
        `images/item${i}-1.jpg`,
        `images/item${i}-2.jpg`,
        `images/item${i}-3.jpg` // optional third image
      ]
    });
  }

  // ======= Get Product ID from URL =======
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const product = products.find(p => p.id === id);

  const wrapper = document.getElementById('detailsWrapper');
  if(!wrapper || !product) return;

  // ======= Render Details HTML =======
  const galleryHTML = product.gallery.map(img => `<img src="${img}" alt="${product.name}">`).join('');

  wrapper.innerHTML = `
    <div class="details-gallery-container">
      <div class="details-gallery" id="carousel">${galleryHTML}</div>
      <button class="gallery-btn prev-btn" id="prevBtn"><i class="fa-solid fa-chevron-left"></i></button>
      <button class="gallery-btn next-btn" id="nextBtn"><i class="fa-solid fa-chevron-right"></i></button>
    </div>
    <div class="details-info">
      <span class="tag">${product.tag}</span>
      <h2>${product.name}</h2>
      <p class="price">₦${product.price.toLocaleString()}</p>
      <p>${product.description}</p>
      <a href="#contact" class="btn wide-btn">Contact Seller</a>
    </div>
  `;

  // ======= Carousel Functionality =======
  const carousel = document.getElementById('carousel');
  const images = carousel.querySelectorAll('img');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let index = 0;

  function updateCarousel() {
    images.forEach(img => img.style.transform = `translateX(-${index * 100}%)`);
  }

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % images.length;
    updateCarousel();
  });

  updateCarousel();

});
