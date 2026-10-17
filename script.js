document.querySelector('#helloBtn').addEventListener('click', () => {
  document.querySelector('#status').textContent = 'Hello from GitHub Pages!';
});
const themeBtn = document.querySelector('#themeBtn');
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
}