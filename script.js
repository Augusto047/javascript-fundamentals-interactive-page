// ============================================================================
// Constellation Lab 
// (with sound functionality)
// ============================================================================

// Utility function to play a click sound.
function playClickSound() {
  const sound = document.getElementById('clickSound');
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }
}

// Get the current year once the page is fully loaded.
let currentYear;
document.addEventListener('DOMContentLoaded', () => {
  currentYear = new Date().getFullYear();
});

// Part 1: JavaScript Basics
const form = document.getElementById('userForm');
const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const greetOut = document.getElementById('greet');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  playClickSound();

  const name = String(nameInput.value).trim();
  const age = Number(ageInput.value);

  let group;
  if (age < 13) group = 'child';
  else if (age < 18) group = 'teen';
  else if (age < 60) group = 'adult';
  else group = 'senior';

  greetOut.textContent = name
    ? `Hello, ${formatName(name)} — you are categorized as: ${group}.`
    : 'Please provide your name.';

  console.log({ name, age, group });
});

// Part 2: Functions
function formatName(name) {
  if (!name) return '';
  return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

function calculateAge(birthYear) {
  return currentYear - birthYear;
}

const birthYearInput = document.getElementById('birthYearInput');
const birthYearBtn = document.getElementById('birthYearBtn');
const ageOut = document.getElementById('ageOut');

birthYearBtn.addEventListener('click', () => {
  playClickSound();
  const birthYear = Number(birthYearInput.value);
  if (!birthYear || birthYear > currentYear) {
    ageOut.textContent = 'Please enter a valid birth year.';
  } else {
    const age = calculateAge(birthYear);
    ageOut.textContent = `Your age is: ${age} years old.`;
    console.log(`Age calculated: ${age}`);
  }
});

// Part 3: Loops
const listOut = document.getElementById('listOut');

document.getElementById('countdownBtn').addEventListener('click', () => {
  playClickSound();
  listOut.innerHTML = '';
  listOut.classList.add('left-align');
  listOut.classList.remove('right-align');
  let n = 5;
  while (n >= 0) {
    const li = document.createElement('li');
    li.textContent = `Countdown: ${n}`;
    listOut.appendChild(li);
    n--;
  }
});

document.getElementById('starsBtn').addEventListener('click', () => {
  playClickSound();
  listOut.innerHTML = '';
  listOut.classList.add('right-align');
  listOut.classList.remove('left-align');
  for (let i = 1; i <= 6; i++) {
    const li = document.createElement('li');
    li.textContent = '★'.repeat(i);
    listOut.appendChild(li);
  }
});

// Part 4: DOM Manipulation
const domBtn1 = document.getElementById('domBtn1');
const domBtn2 = document.getElementById('domBtn2');
// We now get the whole section element by its ID
const domSection = document.getElementById('dom');
const toggleText = document.getElementById('toggleText');

domBtn1.addEventListener('click', () => {
  playClickSound();
  // Toggle the new class on the section, not the inner div
  domSection.classList.toggle('panel--colored');
  console.log('Panel background color toggled.');
});

domBtn2.addEventListener('click', () => {
  playClickSound();
  toggleText.classList.toggle('hidden');
  const isHidden = toggleText.classList.contains('hidden');
  console.log(`Paragraph visible: ${!isHidden}`);
});

// Part 5: Theme Switcher
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  playClickSound();
  document.body.classList.toggle('light-theme');
  console.log('Theme toggled. Check the body element class.');
});