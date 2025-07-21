const menuData = require("../../data/menu.json");

class Menu {
  static getAllItems() {
    return menuData;
  }

  static getItemByName(name) {
    return menuData.find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );
  }

  static getItemsByTag(tag) {
    return menuData.filter((item) => item.tags.includes(tag));
  }
}

module.exports = Menu;
