let intro = document.getElementById('welcome');

function Switch() {
  intro.style.opacity = 0;
  intro.innerHTML = 'soul';
  console.log(intro.innerHTML);
  intro.style.opacity = 1;
}

setTimeout('Switch()', 10000);
