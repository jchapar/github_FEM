class UI {
  constructor() {
    this.profile = document.getElementById('user-profile');
    this.profileLarger = document.getElementById('user-profile-larger');
    this.errorMsg = document.getElementById('error');
    this.searchField = document.getElementById('search');
  }

  showProfile(profile) {
    const year = new Date(profile.created_at).getFullYear();
    const date = new Date(profile.created_at).getDate();
    const month = new Date(profile.created_at).getMonth();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.profile.innerHTML = `
      <!-- User -->
      <div class="flex items-center mb-5">
        <!-- Image -->
        <img src="${profile.avatar_url}" alt="User Profile Image" class="rounded-full h-[100px] w-[100px]" />
        <!-- User Info -->
        <div class="flex flex-col items-start justify-start ml-5">
          <h2 class="text-dark dark:text-white">${profile.name}</h2>
          <p class="text-primaryBlue">@${profile.login}</p>
          <p class="text-steelBlue dark:text-white">Joined ${date} ${months[month]} ${year}</p>
        </div>
      </div>

      <!-- User Bio -->
      <p id="user-bio" class="text-steelBlue dark:text-white font-sans leading-7 text-lg mb-5">${profile.bio}</p>

      <!-- User Stats -->
      <div class="bg-lightColor dark:bg-dark flex items-center justify-center rounded-xl py-5 mb-5 space-x-8">
        <div class="flex flex-col items-center justify-center space-y-3">
          <p class="text-steelBlue dark:text-lightColor">Repos</p>
          <p class="text-dark dark:text-white text-2xl">${profile.public_repos}</p>
        </div>
        <div class="flex flex-col items-center justify-center space-y-3">
          <p class="text-steelBlue dark:text-lightColor">Followers</p>
          <p class="text-dark dark:text-white text-2xl">${profile.followers}</p>
        </div>
        <div class="flex flex-col items-center justify-center space-y-3">
          <p class="text-steelBlue dark:text-lightColor">Following</p>
          <p class="text-dark dark:text-white text-2xl">${profile.following}</p>
        </div>
      </div>

      <!-- User Details SM Screens-->
      <div class="flex flex-col space-y-3 md:hidden">
        <div class="flex items-center justify-start space-x-7">
          <i class="fa-solid fa-location-dot text-steelBlue dark:text-lightColor text-lg"></i>
          <p class="text-steelBlue dark:text-white text-md">${profile.location}</p>
        </div>
        <div class="flex items-center justify-start space-x-5">
        <i class="fa-solid fa-link text-steelBlue dark:text-lightColor text-lg"></i>
        <p class="text-steelBlue dark:text-white text-md">${profile.html_url}</p>
        </div>
        <div class="flex items-center justify-start space-x-7">
          <i class="fa-brands fa-twitter text-ironBlue text-lg"></i>
          <p class="text-ironBlue text-md">@${profile.twitter_username}</p>
        </div>
        <div class="flex items-center justify-start space-x-7">
          <i class="fa-solid fa-building text-steelBlue dark:text-lightColor text-lg"></i>
          <p class="text-ironBlue dark:text-white text-md">@${profile.login}</p>
        </div>
      </div>

      <!-- User Details MD Screens-->
      <div class="hidden md:flex justify-between space-x-5">
        <div class="flex flex-col items-center">
          <div class="flex items-center justify-start space-x-3">
            <i class="fa-solid fa-location-dot text-steelBlue dark:text-lightColor text-lg"></i>
            <p class="text-steelBlue dark:text-white text-md">${profile.location}</p>
          </div>
          <div class="flex items-center justify-start space-x-3">
            <i class="fa-brands fa-twitter text-ironBlue text-lg"></i>
            <p class="text-ironBlue text-md">@${profile.twitter_username}</p>
          </div>
        </div>
        <div class="flex flex-col items-start justify-start">
          <div class="flex items-center justify-start space-x-3">
            <i class="fa-solid fa-link text-steelBlue dark:text-lightColor text-lg"></i>
            <p class="text-steelBlue dark:text-white text-md">${profile.blog}</p>
          </div>
          <div class="flex items-center justify-start space-x-5">
            <i class="fa-solid fa-building text-steelBlue dark:text-lightColor text-lg"></i>
            <p class="text-steelBlue dark:text-white text-md">@${profile.login}</p>
          </div>
        </div>
      </div>
    `;

    this.profileLarger.innerHTML = `
      <!-- Main Content LG Screens-->
      <!-- Image -->
      <div class="basis-1/3 flex justify-center">
        <img src="${profile.avatar_url}" alt="User Profile Image" class="rounded-full h-[150px] w-[150px]" />
      </div>
      <!-- Everything Else -->
      <div class="basis-2/3">
        <!-- User -->
        <div class="mb-5">
          <!-- User Info -->
          <div class="flex flex-col">
            <div class="flex items-center justify-between">
              <h2 class="text-dark dark:text-white text-2xl">${profile.name}</h2>
              <p class="text-steelBlue dark:text-white">Joined ${date} ${months[month]} ${year}</p>
            </div>
            <div class="">
              <p class="text-primaryBlue">@${profile.login}</p>
            </div>
          </div>
        </div>
        <!-- User Bio -->
        <p id="user-bio" class="text-steelBlue dark:text-white font-sans leading-7 text-lg mb-5">${profile.bio}</p>

        <!-- User Stats -->
        <div class="bg-lightColor dark:bg-dark flex items-center justify-center rounded-xl py-5 mb-5 space-x-8">
          <div class="flex flex-col items-center justify-center space-y-3">
            <p class="text-steelBlue dark:text-lightColor">Repos</p>
            <p class="text-dark dark:text-white text-2xl">${profile.public_repos}</p>
          </div>
          <div class="flex flex-col items-center justify-center space-y-3">
            <p class="text-steelBlue dark:text-lightColor">Followers</p>
            <p class="text-dark dark:text-white text-2xl">${profile.followers}</p>
          </div>
          <div class="flex flex-col items-center justify-center space-y-3">
            <p class="text-steelBlue dark:text-lightColor">Following</p>
            <p class="text-dark dark:text-white text-2xl">${profile.following}</p>
          </div>
        </div>

        <!-- User Details SM Screens-->
        <div class="flex flex-col space-y-3 md:hidden">
          <div class="flex items-center justify-start space-x-7">
            <i class="fa-solid fa-location-dot text-steelBlue dark:text-lightColor text-lg"></i>
            <p class="text-steelBlue dark:text-white text-md">${profile.location}</p>
          </div>
          <div class="flex items-center justify-start space-x-5">
            <i class="fa-solid fa-link text-steelBlue dark:text-lightColor text-lg"></i>
            <p class="text-steelBlue dark:text-white text-md">${profile.url}</p>
          </div>
          <div class="flex items-center justify-start space-x-7">
            <i class="fa-brands fa-twitter text-ironBlue text-lg"></i>
            <p class="text-ironBlue text-md">@${profile.twitter_username}</p>
          </div>
          <div class="flex items-center justify-start space-x-7">
            <i class="fa-solid fa-building text-steelBlue dark:text-lightColor text-lg"></i>
            <p class="text-ironBlue dark:text-white text-md">@${profile.login}</p>
          </div>
        </div>

        <!-- User Details MD Screens-->
        <div class="hidden md:flex justify-between space-x-5">
          <div class="flex flex-col items-center">
            <div class="flex items-center justify-start space-x-3">
              <i class="fa-solid fa-location-dot text-steelBlue dark:text-lightColor text-lg"></i>
              <p class="text-steelBlue dark:text-white text-md">${profile.location}</p>
            </div>
            <div class="flex items-center justify-start space-x-3">
              <i class="fa-brands fa-twitter text-ironBlue text-lg"></i>
              <p class="text-ironBlue text-md">@${profile.twitter_username}</p>
            </div>
          </div>
          <div class="flex flex-col items-start justify-start">
            <div class="flex items-center justify-start space-x-3 max-w-md">
              <i class="fa-solid fa-link text-steelBlue dark:text-lightColor text-lg"></i>
              <p class="text-steelBlue dark:text-white text-md">${profile.html_url}</p>
            </div>
            <div class="flex items-center justify-start space-x-5">
              <i class="fa-solid fa-building text-steelBlue dark:text-lightColor text-lg"></i>
              <p class="text-steelBlue dark:text-white text-md">@${profile.login}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Show Alert Message in UI
  showAlert() {
    this.errorMsg.classList.toggle('hidden');
  }

  // Clear Input field
  clearField() {
    this.searchField.value = '';
  }
}
