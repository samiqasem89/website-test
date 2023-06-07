const homeSize = function (sq) {
  if (sq === 900 || sq < 1199) {
    return "1.5 tons - 18k BTU";
  } else if (sq === 1200 || sq < 1499) {
    return "2 tons - 24k BTU";
  } else if (sq === 1500 || sq < 1799) {
    return "2.5 tons - 30k BTU";
  } else if (sq === 1800 || sq < 2099) {
    return "3 tons - 36K BTU";
  } else if (sq === 2100 || sq < 2399) {
    return "3.5 tons - 42K BTU";
  } else if (sq === 2400 || sq < 2699) {
    return "4 tons - 46K BTU ";
  }
};

console.log(homeSize(1550));
//___________________________________________//

const restaurant = {
  orderPizza: ["mushroom", "spanish", "pepper"],
  menu: ["shrimps", "bread"],
};

console.log(restaurant.orderPizza && restaurant && "bring all");
console.log(restaurant.orderPizza || restaurant || "bring it all");

// const mapy = new Map();
// mapy.set("school", "north broward");
// mapy.set(1, "the first school in the county");

// console.log(mapy);

const quest = new Map([
  ["question", "what is te best programming language?"],
  [1, "C"],
  [2, "java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "correct"],
  [false, "try again"],
]);

for (const [key, value] of quest) {
  if (typeof key === "number") console.log(`Answer is ${key}: ${value}`);
}

const answer = Number(prompt(quest.get("question")));
// if (answer === quest.get("correct")) {
//   console.log(quest.get(true));
// } else {
//   console.log(quest.get(false));
// }
console.log(answer);

console.log(quest.get(quest.get("correct") === answer));
console.log(...quest);
