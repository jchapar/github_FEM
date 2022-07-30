class UI {
  constructor() {
    this.profile = document.getElementById('user-profile');
  }

  showProfile(profile) {
    console.log(profile);
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
    `;
  }
}
