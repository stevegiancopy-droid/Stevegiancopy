fetch("/public/cms/home.json")
  .then(response => response.json())
  .then(data => {
    // Primary CTA
    document.getElementById("primary-btn-text").textContent =
      data.button_primary_text;

    document.getElementById("primary-btn").href =
      data.button_primary_link;
  })
  .catch(err => console.error("CMS load error:", err));
