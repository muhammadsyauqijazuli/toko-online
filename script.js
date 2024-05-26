function filterCards() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('#productContainer .card');
    const carousel = document.getElementById('carouselExample');
    let found = false;

    cards.forEach(card => {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      const text = card.querySelector('.card-text').textContent.toLowerCase();
      if (title.includes(searchInput) || text.includes(searchInput)) {
        card.style.display = 'block';
        found = true;
      } else {
        card.style.display = 'none';
      }
    });

    if (searchInput === '') {
      // Show all cards and the carousel when the search input is cleared
      cards.forEach(card => {
        card.style.display = 'block';
      });
      carousel.style.display = 'block';
      document.getElementById('notFound').style.display = 'none';
    } else {
      // Hide the carousel during search
      carousel.style.display = 'none';
      if (!found) {
        document.getElementById('notFound').style.display = 'block';
      } else {
        document.getElementById('notFound').style.display = 'none';
      }
    }
  }

  document.getElementById('searchInput').addEventListener('input', filterCards);