// Get HTML elements
const crane = document.querySelector('.crane');
const hook = document.querySelector('.hook');
const tower = document.querySelector('.tower');
const airlock = document.querySelector('.airlock');
const solarPanels = document.querySelector('.solar-panels');
const windowElements = document.querySelectorAll('.window');
const moveLeftButton = document.querySelector('#move-left');
const moveRightButton = document.querySelector('#move-right');
const moveUpButton = document.querySelector('#move-up');
const moveDownButton = document.querySelector('#move-down');
const rotateLeftButton = document.querySelector('#rotate-left');
const rotateRightButton = document.querySelector('#rotate-right');
const toggleLightsButton = document.querySelector('#toggle-lights');

// Track crane movement and rotation status
let isMoving = false;
let isRotating = false;

// Function to move the crane with mouse input
function moveCrane(event) {
    if (isMoving) {
        let x = event.clientX - crane.offsetWidth / 2;
        let y = event.clientY - crane.offsetHeight / 2;
        crane.style.left = x + 'px';
        crane.style.top = y + 'px';
        hook.style.left = crane.offsetWidth / 2 - hook.offsetWidth / 2 + 'px';
        hook.style.top = crane.offsetHeight + 'px';
    }
}

// Function to rotate the crane
function rotateCrane(degrees) {
    if (isRotating) {
        let currentRotation = parseInt(crane.style.transform.split(' ')[1]);
        let newRotation = currentRotation + degrees;
        crane.style.transform = `rotate(${newRotation}deg)`;
    }
}

// Function to toggle the lights on and off
function toggleLights() {
    for (let i = 0; i < windowElements.length; i++) {
        windowElements[i].classList.toggle('lit');
    }
}

// Add event listeners for button clicks and mouse and keyboard input
moveLeftButton.addEventListener('mousedown', () => {
    isMoving = true;
});

moveRightButton.addEventListener('mousedown', () => {
    isMoving = true;
});

moveUpButton.addEventListener('mousedown', () => {
    isMoving = true;
});

moveDownButton.addEventListener('mousedown', () => {
    isMoving = true;
});

rotateLeftButton.addEventListener('mousedown', () => {
    isRotating = true;
});

rotateRightButton.addEventListener('mousedown', () => {
    isRotating = true;
});

document.addEventListener('mouseup', () => {
    isMoving = false;
    isRotating = false;
});

toggleLightsButton.addEventListener('click', toggleLights);

document.addEventListener('mousemove', moveCrane);

document.addEventListener('keydown', event => {
    if (event.code === 'ArrowLeft') {
        rotateCrane(-10);
    } else if (event.code === 'ArrowRight') {
        rotateCrane(10);
    }
});

document.addEventListener('keyup', () => {
    isRotating = false;
});

// Label the different parts of the space base
tower.title = "Tower";
airlock.title = "Airlock";
solarPanels.title = "Solar Panels";
for (let i = 0; i < windowElements.length; i++) {
    windowElements[i].title = "Window";
}
moveLeftButton.title = "Move Left";
moveRightButton.title = "Move Right";
moveUpButton.title = "Move Up";
moveDownButton.title = "Move Down";
rotateLeftButton.title = "Rotate Left";
rotateRightButton.title = "Rotate Right";
toggleLightsButton.title = "Toggle Lights";
