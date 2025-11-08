<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
<script>
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", (user) => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });

    // Handle password recovery correctly
    window.netlifyIdentity.on("recover", () => {
      window.netlifyIdentity.open();
    });
  }
</script>
