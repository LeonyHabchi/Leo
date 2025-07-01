class ThemeManager {
  constructor() {
    this.themeSwitch = document.getElementById('theme-switch');
    this.darkmode = localStorage.getItem('darkmode');
    if (this.darkmode === 'active') this.enableDarkmode();
    this.themeSwitch.addEventListener('click', () => this.toggleDarkmode());
  }

  enableDarkmode() {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
  }

  disableDarkmode() {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
  }

  toggleDarkmode() {
    this.darkmode = localStorage.getItem('darkmode');
    if (this.darkmode !== 'active') {
      this.enableDarkmode();
    } else {
      this.disableDarkmode();
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ThemeManager();
});

/**/
