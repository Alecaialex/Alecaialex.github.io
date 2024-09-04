const loadingTextElement = document.getElementById('loading-text');
const loadingBarElement = document.getElementById('loading-bar');
const containerElement = document.getElementById('container');
const textElement = document.getElementById('text');
const subtextElement = document.getElementById('subtext');
const buttonsElement = document.getElementById('buttons');

const text = 'C:\\> Alejandro Sanz: Especialista en soporte técnico y ciberseguridad...\n\nC:\\> Estudiante de grado superior (DAM) con grado medio (SMR)...\n\n\n\n';

let index = 0;
let loadingIndex = 0;
const loadingBarLength = 20; // Length of the loading bar

function updateLoadingBar() {
    loadingIndex++;
    const progress = Math.floor((loadingIndex / loadingBarLength) * 100);
    loadingBarElement.textContent = `[${'='.repeat(loadingIndex)}${' '.repeat(loadingBarLength - loadingIndex)}] ${progress}%`;
    
    if (loadingIndex < loadingBarLength) {
        setTimeout(updateLoadingBar, 100); // Adjust loading speed here
    } else {
        setTimeout(showMainContent, 500); // Delay before showing main content
    }
}

function showMainContent() {
    document.getElementById('loading-screen').classList.add('hidden');
    containerElement.classList.remove('hidden');
    typeText();
}

function typeText() {
    if (index < text.length) {
        textElement.textContent += text[index];
        index++;
        setTimeout(typeText, 50); // Adjust typing speed here
    } else {
        setTimeout(showSubtext, 500); // Delay before showing subtitle
    }
}

function showSubtext() {
    subtextElement.classList.remove('hidden');
    setTimeout(showButtons, 500); // Delay before showing buttons
}

function showButtons() {
    buttonsElement.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    updateLoadingBar();
});
