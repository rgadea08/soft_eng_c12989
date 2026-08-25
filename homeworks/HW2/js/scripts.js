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

function toggleAccordion(button) {
  const body = button.nextElementSibling;
  body.classList.toggle('hidden');
  button.classList.toggle('open');
}

document.getElementById('commentForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let isValid = true;

  const nameInput = document.getElementById('commenterName');
  const emailInput = document.getElementById('commenterEmail');
  const commentInput = document.getElementById('commentText');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const commentError = document.getElementById('commentError');

  // Limpiar estado previo
  [nameInput, emailInput, commentInput].forEach(function(input) {
    input.classList.remove('invalid');
  });
  nameError.textContent = '';
  emailError.textContent = '';
  commentError.textContent = '';

  // Validar nombre
  if (nameInput.value.trim().length < 2) {
    nameError.textContent = 'Please enter a name (at least 2 characters).';
    nameInput.classList.add('invalid');
    isValid = false;
  }

  // Validar email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email address.';
    emailInput.classList.add('invalid');
    isValid = false;
  }

  // Validar comentario
  if (commentInput.value.trim().length < 10) {
    commentError.textContent = 'Your comment must be at least 10 characters.';
    commentInput.classList.add('invalid');
    isValid = false;
  }

  if (isValid) {
    addComment(nameInput.value.trim(), commentInput.value.trim());
    document.getElementById('formSuccess').classList.remove('hidden');
    this.reset();

    setTimeout(function() {
      document.getElementById('formSuccess').classList.add('hidden');
    }, 3000);
  }
});

function addComment(name, text) {
  const list = document.getElementById('commentsList');

  const item = document.createElement('li');
  item.classList.add('comment-item');

  const author = document.createElement('p');
  author.classList.add('comment-author');
  author.textContent = name;

  const body = document.createElement('p');
  body.textContent = text;

  item.appendChild(author);
  item.appendChild(body);
  list.prepend(item);
}