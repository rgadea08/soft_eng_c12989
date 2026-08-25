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

const characterData = {
  yavanna: {
    title: "Yavanna",
    text: "Yavanna, whose name means 'Giver of Fruits', is one of the Valar most closely tied to growth and nature in Arda. She sang the Two Trees into being on the hill of Ezellohar, giving light to Valinor after the destruction of the Two Lamps."
  },
  eruIluvatar: {
    title: "Eru Ilúvatar",
    text: "Eru Ilúvatar is the supreme being and creator of all existence in Tolkien's legendarium. He created the Ainur, the divine spirits who later shaped the world, and is the ultimate source of all life in Arda."
  },
  twoLamps: {
    title: "The Two Lamps",
    text: "Illuin and Ormal were the first sources of light in Arda, set upon great pillars by the Valar before the Sun and Moon existed. Melkor destroyed both lamps, plunging the world into darkness and forcing the Valar to relocate to Valinor."
  },
  ungoliant: {
    title: "Ungoliant",
    text: "Ungoliant was a primeval spider of immense power and hunger for light, dwelling in the region of Avathar. She allied with Melkor to destroy the Two Trees, draining their light to feed her endless darkness."
  },
  melkor: {
    title: "Melkor / Morgoth",
    text: "Once the mightiest of the Ainur, Melkor turned to darkness out of pride and a desire to dominate creation. After destroying the Two Trees with Ungoliant's help, he was named Morgoth, 'Dark Enemy of the World', by the Elves."
  }
};

function openCharacterModal(characterId) {
  const data = characterData[characterId];
  document.getElementById('modalTitle').textContent = data.title;
  document.getElementById('modalText').textContent = data.text;
  document.getElementById('characterModal').classList.remove('hidden');
}

function closeCharacterModal() {
  document.getElementById('characterModal').classList.add('hidden');
}