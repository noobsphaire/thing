document.getElementById('upload-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const subject = document.getElementById('subject').value;
  const file = document.getElementById('file').files[0];

  if (name && subject && file) {
    const cardContainer = document.getElementById('cards-container');

    // Create a new card
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${name}</h3>
      <p>Subject: ${subject}</p>
      <p>File: ${file.name}</p>
      <a href="${URL.createObjectURL(file)}" download="${file.name}" class="btn">Download</a>
    `;

    cardContainer.appendChild(card);

    // Clear the form
    document.getElementById('upload-form').reset();
  } else {
    alert('Please fill out all fields and upload a file.');
  }
});

// Theme toggle functionality
document.getElementById('theme-toggle').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});