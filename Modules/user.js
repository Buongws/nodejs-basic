const events = require("events");

module.exports = class extends events {
  constructor() {
    super();
    this.users = [];
  }
  addUser(user) {
    this.users.push(user);
    this.emit("userAdded", user);
  }
  getUsers() {
    return this.users;
  }
};
