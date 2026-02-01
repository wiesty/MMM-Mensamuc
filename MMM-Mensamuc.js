Module.register("MMM-Mensamuc", {
  defaults: {
    canteen: "mensa-garching",
    dishTypeFilter: ["ALL"]
  },

  getHeader: function () {
    return "Mensamuc";
  },

  getStyles: function () {
    return ["MMM-Mensamuc.css"];
  },

  start: function () {
    this.updateMenu();
    setInterval(() => {
      this.updateMenu();
    }, 60 * 60 * 1000);
  },

  updateMenu: function () {
    Log.info('%cMMM-Mensamuc updating Menu... ', 'background: #222; color: #ff9f6b');
    const weekNumber = moment().format("WW");
    const year = moment().year();
    const url = `https://tum-dev.github.io/eat-api/${this.config.canteen}/${year}/${weekNumber}.json`;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) { 
          try {
            const data = JSON.parse(xhr.responseText); 
            Log.info('%cMMM-Mensamuc Menu loaded. ', 'background: #222; color: #bada55');
            this.menu = data;
          } catch (error) {
            Log.info(`%cMMM-Mensamuc Error: (${error})`, 'background: #222; color: #ff0000');
            this.menu = null; 
          }
        } else if (xhr.status === 404) {
          Log.info('%cMMM-Mensamuc TUM EAT API has not added this week yet.', 'background: #222; color: #ff0000');
          this.menu = null;
        } else {
          Log.info(`%cMMM-Mensamuc Error: (HTTP ${xhr.status})`, 'background: #222; color: #ff0000');
          this.menu = null;
        }
        this.updateDom();
      }
    };

    xhr.onerror = () => {
      Log.info('Network error occurred. Unable to fetch the menu.');
      this.menu = null;
      this.updateDom();
    };

    xhr.send();
  },

  getMenuTable: function () {
    if (!this.menu) { 
      return document.createTextNode("No menu available yet.");
    }

    const currentDate = moment().format("YYYY-MM-DD");
    const menuForCurrentDate = this.menu.days.find((day) => day.date === currentDate);

    if (!menuForCurrentDate) {
      return document.createTextNode("No menu available for today.");
    }

    const table = document.createElement("table");
    table.classList.add("mensamuc-table");

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const dishHeader = document.createElement("th");
    dishHeader.textContent = "Gericht";
    const emojiHeader = document.createElement("th");
    emojiHeader.textContent = " ";
    const priceHeader = document.createElement("th");
    priceHeader.textContent = "Preis";

    headerRow.appendChild(dishHeader);
    headerRow.appendChild(emojiHeader);
    headerRow.appendChild(priceHeader);
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    const filteredDishes = menuForCurrentDate.dishes.filter((dish) => {
      if (this.config.dishTypeFilter) {
        if (Array.isArray(this.config.dishTypeFilter)) {
          return this.config.dishTypeFilter.includes("ALL") || this.config.dishTypeFilter.some((filter) => {
            if (filter === "Tagesgericht") {
              return dish.dish_type.includes("Tagesgericht");
            } else if (filter === "Aktionsessen") {
              return dish.dish_type.includes("Aktionsessen") || dish.dish_type.startsWith("Aktions");
            } else {
              return dish.dish_type === filter;
            }
          });
        } else {
          if (this.config.dishTypeFilter === "ALL") {
            return true;
          } else if (this.config.dishTypeFilter === "Tagesgericht") {
            return dish.dish_type.includes("Tagesgericht");
          } else if (this.config.dishTypeFilter === "Aktionsessen") {
            return dish.dish_type.includes("Aktionsessen") || dish.dish_type.startsWith("Aktions");
          } else {
            return dish.dish_type === this.config.dishTypeFilter;
          }
        }
      }
      return true;
    });

    filteredDishes.forEach((dish) => {
      const row = document.createElement("tr");
      const dishName = document.createElement("td");
      dishName.textContent = dish.name;
      const emoji = document.createElement("td");
      const price = document.createElement("td");

      if (dish.labels && dish.labels.includes("MEAT")) {
        emoji.textContent = "\ud83c\udf56";
      } else if (dish.labels && dish.labels.includes("VEGETARIAN")) {
        emoji.textContent = "\ud83e\udd55";
      } else if (dish.labels && dish.labels.includes("VEGAN")) {
        emoji.textContent = "\ud83e\uded1";
      }

      if (dish.prices && dish.prices.students && dish.prices.students.base_price) {
        price.textContent = dish.prices.students.base_price.toFixed(2) + " €";
      }

      row.appendChild(dishName);
      row.appendChild(emoji);
      row.appendChild(price);
      tbody.appendChild(row);
    });

    table.appendChild(tbody);

    return table;
  },

  validateConfig: function (config) {
    if (!config.canteen) {
      Log.info("The 'canteen' property is required in the module configuration.");
    }
    if (config.dishTypeFilter && typeof config.dishTypeFilter !== "string" && !Array.isArray(config.dishTypeFilter)) {
      Log.info("The 'dishTypeFilter' property, if provided, must be a string or an array of strings.");
    }
  },

  getDom: function () {
    const wrapper = document.createElement("div");
    wrapper.appendChild(this.getMenuTable());
    return wrapper;
  }
});
