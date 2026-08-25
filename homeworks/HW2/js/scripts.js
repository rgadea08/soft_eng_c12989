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