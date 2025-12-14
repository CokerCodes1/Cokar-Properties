document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".view-item-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      console.log("View item ID:", btn.dataset.id);
      // Future PHP redirect here
    });
  });

  document.querySelectorAll(".add-cart-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      console.log("Add to cart ID:", btn.dataset.id);
      // Future cart logic
    });
  });

});
