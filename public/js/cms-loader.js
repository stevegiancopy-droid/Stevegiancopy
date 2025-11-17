// Load home.json from public/cms/
fetch('/public/cms/home.json')
  .then(response => response.json())
  .then(data => {
    // PRIMARY BUTTON
    if (document.getElementById('primary-btn-text')) {
      document.getElementById('primary-btn-text').textContent = data.button_primary_text;
    }

    if (document.getElementById('primary-btn')) {
      document.getElementById('primary-btn').href = data.button_primary_link;
    }

    // SECONDARY BUTTON
    if (document.getElementById('secondary-btn-text')) {
      document.getElementById('secondary-btn-text').textContent = data.button_secondary_text;
    }

    if (document.getElementById('secondary-btn')) {
      document.getElementById('secondary-btn').href = data.button_secondary_link;
    }
  })
  .catch(error => console.error('Error loading home.json:', error));
