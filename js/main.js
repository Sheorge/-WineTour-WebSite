// Initialize and add the map

// Sticky menu background

// Smooth Scrolling
$('.menu a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 65
      },
      500
    );
  }
});
