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

  // ✅ Detect password recovery links and redirect to /admin with token
  if (window.location.hash && window.location.hash.includes("recovery_token")) {
    window.location.replace("/admin/" + window.location.hash);
  }

  // Optional: redirect after signup or recovery from inside /admin
  window.netlifyIdentity.on("signup", () => {
    document.location.href = "/admin/";
  });
  window.netlifyIdentity.on("recovery", () => {
    document.location.href = "/admin/";
  });
}
</script>
