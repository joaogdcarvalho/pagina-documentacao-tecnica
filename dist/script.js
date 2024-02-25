document.addEventListener('DOMContentLoaded', function () {
  const navbarLinks = document.querySelectorAll('.nav-link');

  navbarLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
});