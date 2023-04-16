const controls = document.getElementById('controls');
const input = controls.querySelector('input');
const renderBtn = controls.querySelector('button[data-action="render"]');
const destroyBtn = controls.querySelector('button[data-action="destroy"]');
const boxes = document.getElementById('boxes');

renderBtn.addEventListener('click', () => {
  const numBoxes = parseInt(input.value);

  for (let i = 0; i < numBoxes; i++) {
    const box = document.createElement('div');
    box.style.width = '30px';
    box.style.height = '30px';
    box.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

    boxes.appendChild(box);
  }
});

destroyBtn.addEventListener('click', () => {
  boxes.innerHTML = '';
});