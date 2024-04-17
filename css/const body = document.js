const toggleSwitch = document.querySelector('#toggleSwitch');
const sliderIcon = document.querySelector('.slider-icon');

toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) {
  if (e.target.checked) {
    document.body.classList.add('dark-mode');
    sliderIcon.classList.remove('sun');
    sliderIcon.classList.add('moon');
  } else {
    document.body.classList.remove('dark-mode');
    sliderIcon.classList.remove('moon');
    sliderIcon.classList.add('sun');
  }
}