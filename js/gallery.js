window.onload = () => {
    const barButton = document.querySelector('.user-bar #changeDetails');
    const removeButton = document.querySelector('#removeDetails');
    const refreshButton = document.getElementById('refresh');
    barButton.addEventListener('click', changeDetails);
    removeButton.addEventListener('click', removeDetails);
    refreshButton.addEventListener('click', () => {
      window.location.reload();
    });
    renderBar();
  }

  function renderBar() {
    const barMessage = document.querySelector('.user-bar .message');
    const barButton = document.querySelector('.user-bar #changeDetails');
    let userDetails = null;
    try {
      userDetails = JSON.parse(localStorage.getItem('userDetails'));
    } catch (error) {
      userDetails = null;
    }
    if (userDetails) {
      barMessage.innerHTML = `Bine ai venit, ${userDetails.name}! Ai ${userDetails.age} ani.`;
      barButton.innerHTML = "Schimbă detaliile";
    } else {
      barMessage.innerHTML = "Bine ai venit! Nu stim nimic despre tine...";
      barButton.innerHTML = "Adăugă detalii";
    }

    // Obține stilurile calculate pentru barButton
    const computedStyles = window.getComputedStyle(barButton);
    console.log(computedStyles.color); // Exemplu de utilizare a unui stil calculat
  }

  function changeDetails(event) {
    event.preventDefault();
    event.stopPropagation();
    const barButton = document.querySelector('.user-bar #changeDetails'); // Selectați butonul în funcție de nevoile dvs.
    const name = prompt('Introdu numele tău');
    if (!name) return;
    const age = prompt('Introdu vârsta');
    if (!age) return;
    const userDetails = { name, age };
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    renderBar();

    // Obține informații despre poziția și dimensiunile butonului
    const buttonRect = barButton.getBoundingClientRect();
    console.log(buttonRect.top, buttonRect.left, buttonRect.width, buttonRect.height); // Exemplu de utilizare a informațiilor obținute
  }

  function removeDetails() {
    localStorage.removeItem('userDetails');
    renderBar();
  }