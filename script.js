
//----------------------- Button Function
const colorBtn = document.getElementById('colorBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');

let currentMode = 'color' ;
activateButton('color');

colorBtn.addEventListener('click', () => setCurrentMode('color'));
rainbowBtn.addEventListener('click', () => setCurrentMode('rainbow'));
eraserBtn.addEventListener('click', () => setCurrentMode('eraser'));
clearBtn.addEventListener('click', () => setCurrentMode('clear'));

// colorBtn.onclick = () => setCurrentMode('color')
// rainbowBtn.onclick = () => setCurrentMode('rainbow')
// eraserBtn.onclick = () => setCurrentMode('eraser')
// clearBtn.onclick = () => setCurrentMode('clear')

function setCurrentMode(chosen){
  activateButton(chosen);
  currentMode = chosen;
}

function activateButton(chosen){
  colorBtn.classList.remove('active');
  rainbowBtn.classList.remove('active');
  eraserBtn.classList.remove('active');
  clearBtn.classList.remove('active');
  if(chosen === 'color')
    colorBtn.classList.add('active') ;
  else if(chosen === 'rainbow')
    rainbowBtn.classList.add('active');
  else if(chosen === 'eraser')
    eraserBtn.classList.add('active');
  else if(chosen === 'clear'){
    clearBtn.classList.add('active');
    clearAll();
  }
    
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
  else if(currentMode === 'rainbow'){
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
  }
  else if(currentMode === 'eraser')
    e.target.style.backgroundColor = 'white' ;
}

function clearAll(){
  const gridElementAll = document.querySelectorAll('.grid-element');
  gridElementAll.forEach( (element) => {
    element.style.backgroundColor = 'white';
  })
  
}
//-----------------------
