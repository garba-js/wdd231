// ====== Navigation Toggle ======
const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
  navBar.classList.toggle('show');
});

// ====== Footer Year and Last Modified ======
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

// ====== Member Directory Logic ======
document.addEventListener("DOMContentLoaded", () => {
  const directory = document.getElementById("directory");
  const gridViewBtn = document.getElementById("grid-view");
  const listViewBtn = document.getElementById("list-view");

  // Fetch member data from JSON
  fetch("data/members.json")
    .then(response => response.json())
    .then(data => {
      displayMembers(data);
    })
    .catch(error => {
      console.error("Error loading member data:", error);
      directory.innerHTML = "<p>Error loading member directory. Please try again later.</p>";
    });

  // Display members as cards
  function displayMembers(members) {
    directory.innerHTML = "";

    members.forEach(member => {
      const card = document.createElement("section");
      card.classList.add("member-card");
      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name} Logo" loading="lazy">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p><a href="tel:${member.phone.replace(/\s+/g, '')}">${member.phone}</a></p>
        <p><a href="${member.website}" target="_blank" rel="noopener">${member.website}</a></p>
        <p><span class="badge ${member.membership.toLowerCase()}">${member.membership}</span></p>
      `;
      directory.appendChild(card);
    });
  }

  // Toggle view buttons
  gridViewBtn.addEventListener("click", () => {
    directory.classList.add("grid");
    directory.classList.remove("list");
  });

  listViewBtn.addEventListener("click", () => {
    directory.classList.add("list");
    directory.classList.remove("grid");
  });
});
