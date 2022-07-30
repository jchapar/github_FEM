// Init Github
const github = new Github();
// Init UI
const ui = new UI();

// Theme toggle button
const lightMode = document.getElementById('toggle-light');
const darkMode = document.getElementById('toggle-dark');

lightMode.addEventListener('click', () => {
  toggleTheme();
  // lightMode.classList.toggle('hidden');
  // darkMode.classList.toggle('flex');
});

darkMode.addEventListener('click', () => {
  toggleTheme();
  // lightMode.classList.toggle('flex');
  // darkMode.classList.toggle('hidden');
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
      } else {
        // Show Profile
        ui.showProfile(data);
      }
    });
  } else {
    // Clear Profile
  }
});
