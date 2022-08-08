
//----------------------- Button Function
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
  colorBtn.classList.remove('active');
  rainbowBtn.classList.remove('active');
  eraserBtn.classList.remove('active');
  if(chosen === 'color')
    colorBtn.classList.add('active') ;
  else if(chosen === 'rainbow')
    rainbowBtn.classList.add('active');
  else if(chosen === 'eraser')
    eraserBtn.classList.add('active');
}
//-----------------------

//----------------------- Grid Function
const grid = document.querySelector('.grid') ;

function setupGrid(){
  grid.style.gridTemplateColumns = ' repeat(16, 1fr) ' ;
  grid.style.gridTemplateRows = ' repeat(16, 1fr) ' ;

  for(let i=0; i<16*16 ; i++){
    const gridElement = document.createElement('div') ;
    gridElement.classList.add('grid-element');
    gridElement.addEventListener('mouseover', painting) ;
    gridElement.addEventListener('mousedown', painting) ;
    grid.appendChild(gridElement);
  }
}
setupGrid();

let mouseDown = false ;
document.body.onmousedown = () => (mouseDown = true) ;
document.body.onmouseup = () => (mouseDown = false) ;

function painting(e){
  if (e.type === 'mouseover' && !mouseDown) return ;
  if(currentMode === 'color'){
    e.target.style.backgroundColor = '#333333' ;
  }
}

//-----------------------
