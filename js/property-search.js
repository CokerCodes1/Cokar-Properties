document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("propertySearchForm");
  const resultsBox = document.getElementById("propertyResults");

  if (!form || !resultsBox) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    resultsBox.innerHTML = "<p class='loading'>Searching properties...</p>";

    try {
      const response = await fetch("includes/search.php", {
        method: "POST",
        body: formData
      });

      const html = await response.text();
      resultsBox.innerHTML = html;

    } catch (error) {
      resultsBox.innerHTML =
        "<p class='error'>Unable to load results. Please try again.</p>";
    }
  });
});
