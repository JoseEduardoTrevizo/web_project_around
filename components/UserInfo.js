export default class UserInfo {
  constructor(usernameSelector, jobSelector) {
    this._username = document.querySelector(usernameSelector);
    this._job = document.querySelector(jobSelector);
  }
  getUserInfo() {
    return {
      username: this._username.textContent,
      job: this._job.textContent,
    };
  }
  setUserInfo({ username, job }) {
    this._username.textContent = username;
    this._job.textContent = job;
  }
}
