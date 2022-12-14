// Init Github
const github = new Github();
// Init UI
const ui = new UI();

// Theme toggle button
const lightMode = document.getElementById('toggle-light');
const darkMode = document.getElementById('toggle-dark');

lightMode.addEventListener('click', () => {
  toggleTheme();
});

darkMode.addEventListener('click', () => {
  toggleTheme();
});

const toggleTheme = function () {
  document.documentElement.classList.toggle('dark');
};

// Search Input
const searchUser = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');

// Search Button Event Listeer
searchBtn.addEventListener('click', () => {
  // Get input text
  const searchText = searchUser.value;

  if (searchText !== '') {
    // Make HTTP Call
    github.getUser(searchText).then((data) => {
      if (data.message === 'Not Found') {
        // Show Alert
        ui.showAlert();
        setTimeout(() => {
          ui.showAlert();
        }, 2000);
      } else {
        // Show Profile
        ui.showProfile(data);
        // Clear Field
        ui.clearField();
      }
    });
  }
});
