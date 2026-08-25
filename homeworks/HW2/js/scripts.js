const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('change', function() {
  document.body.classList.toggle('dark-mode');
});

function activateTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(function(t) {
    t.classList.remove('active');
  });
  document.querySelectorAll('.tab-btn').forEach(function(b) {
    b.classList.remove('active');
  });

  document.getElementById(tabId).classList.add('active');
  document.querySelector(`.tab-btn[data-tab="${tabId}"]`).classList.add('active');
}

function toggleQuote(quoteId, button) {
  const quote = document.getElementById(quoteId);
  quote.classList.toggle('expanded');

  if (quote.classList.contains('expanded')) {
    button.textContent = 'Read less';
  } else {
    button.textContent = 'Read more';
  }
}

function openLightbox(src, caption) {
  document.getElementById('lightboxImg').src = src;
  document.getElementById('lightboxCaption').textContent = caption;
  document.getElementById('lightbox').classList.remove('hidden');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.add('hidden');
}