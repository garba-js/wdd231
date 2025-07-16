// STEP 1: Set the URL where the data lives
const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

// STEP 2: Get the div container from the HTML
const cards = document.querySelector('#cards');

// STEP 3: Define the async function to fetch and display data
async function getProphetData() {
  const response = await fetch(url);       // Get the data
  const data = await response.json();      // Convert to JSON
  // console.table(data.prophets);        // You can use this to test if needed
  displayProphets(data.prophets);          // Send the array to the display function
}

// STEP 4: Define a function to build the cards
const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Create elements
    let card = document.createElement('section');
    let fullName = document.createElement('h2');
    let birthDate = document.createElement('p');
    let birthPlace = document.createElement('p');
    let portrait = document.createElement('img');

    // Fill content
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

    // Fill image
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Build the card
    card.appendChild(fullName);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(portrait);

    // Add the card to the page
    cards.appendChild(card);
  });
};

// STEP 5: Call the function to run it
getProphetData();
