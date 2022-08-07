const colorBtn = document.getElementById('colorBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const eraserBtn = document.getElementById('eraserBtn');

let currentMode = 'color' ;

colorBtn.onclick = () => setCurrentMode('color')
rainbowBtn.onclick = () => setCurrentMode('rainbow')
eraserBtn.onclick = () => setCurrentMode('eraser')

function setCurrentMode(chosen){
  activateButton(chosen);
  currentMode = chosen;
}

function activateButton(chosen){
  colorBtn.classList.remove('active')
  rainbowBtn.classList.remove('active')
  eraserBtn.classList.remove('active')
  if(chosen === 'color')
    colorBtn.classList.add('active') ;
  else if(chosen === 'rainbow')
    rainbowBtn.classList.add('active');
  else if(chosen === 'eraser')
    eraserBtn.classList.add('active');
}
