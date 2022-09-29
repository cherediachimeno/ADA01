/*------------------
1)
The loop is currently printing
the index of the person array.
Switch it so it is printing
the values instead.
------------------*/
const person = ["Sofia", 30, "Barcelona", true];

for (let i = 0; i < person.length; i++) {
  console.log(person[i]);
}

/*------------------
2)
Write a loop that prints all
the values in pet.
------------------*/

const pet = ["Spot", 2, "dog", "spotted"];

for (let i = 0; i < pet.length; i++) {
  console.log(pet[i]);
}

/*------------------
3)
Create an array called "features" and
add at least four items to it.

Then, print all the features
in ONE statement instead of one at
a time. Using a loop, add each value
to the "carFeatures" string.

Bonus: add a comma between each feature
so it more closely resembles a real
sentence when it prints.
------------------*/

// your array here
carFeatures = "The features of the car are: ";
const features = ["wheels", "color", "truck", "seats", "model", "brand"];

console.log(features.toString());

// your loop here
for (let i = 0; i < features.length; i++) {
  carFeatures += features[i];
  if (i < features.length - 1) carFeatures += ",";
  else carFeatures += ".";
}

console.log(carFeatures);

/*------------------
4)
Write a loop that prints all
the items in the nums array
backwards (ie: start with 10 and
end with 0).
------------------*/

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = nums.length - 1; i >= 0; i--) {
  console.log(nums[i]);
}

/*------------------
5)
Create a nested loop that prints
the numbers in the gridNum array
in order.
------------------*/

let gridNum = [[1, 2, 3], [4, 5], [6, 7, 8, 9], [10]];

for (let i = 0; i < gridNum.length; i++) {
  var dim = gridNum[i];
  for (let j = 0; j < dim.length; j++) {
    console.log(dim[j]);
  }
}

/*------------------
6)
Write a loop that prints
the Pokemon names.
------------------*/

const pokemon = [
  {
    pkdx_id: 1,
    name: "Bulbasaur",
    description:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    types: ["poison", "grass"]
  },
  {
    pkdx_id: 2,
    name: "Ivysaur",
    description:
      "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
    types: ["poison", "grass"]
  },
  {
    pkdx_id: 3,
    name: "Venusaur",
    description:
      "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
    types: ["poison", "grass"]
  },
  {
    pkdx_id: 4,
    name: "Charmander",
    description:
      "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
    types: ["fire"]
  }
];

for (let i = 0; i < pokemon.length; i++) {
  console.log(pokemon[i].name);
}

/*------------------
7)
Now, create a nested loop
that prints all the "types" from
the pokemon array.
------------------*/

for (let i = 0; i < pokemon.length; i++) {
  var mypok = pokemon[i];
  for (let j = 0; j < mypok.types.length; j++) {
    console.log(mypok.types[j]);
  }
}

/*------------------
8)
Create a loop that prints
the letters in alphabetical
order (you will have to use
three nested loops to do this).

Try to do this WITHOUT looking at the slides.
------------------*/

let letters = [
  [["A"], ["B"], ["C"]],
  [["D"], ["E"], ["F"]],
  [["G"], ["H"], ["I"]]
];

for (let i = 0; i < letters.length; i++) {
  var l1 = letters[i];
  for (let j = 0; j < l1.length; j++) {
    var l2 = l1[j];
    for (let k = 0; k < l2.length; k++) {
      console.log(l2[k]);
    }
  }
}

/*------------------
9)
Create a nested loop to add each address
into the "allAddresses" array. However,
instead of adding them in as objects, loop
through the objects to concatenate the values
into strings.

Your result should look like this:
["Carrer de CodeOp 42 Barcelona Spain", "Carrer de Tech 200 Madrid Spain", "Carrer de JSON Seville Spain"]

Hint: try creating a variable between the
loops to store each address string before
pushing it into the allAddress array.
------------------*/

let allAddress = [];

const addressList = [
  {
    line1: "Carrer de CodeOp",
    line2: 42,
    city: "Barcelona",
    country: "Spain"
  },
  {
    line1: "Carrer de Tech",
    line2: 200,
    city: "Madrid",
    country: "Spain"
  },
  {
    line1: "Carrer de JSON",
    line2: 22,
    city: "Seville",
    country: "Spain"
  }
];

// your code here

for (let i = 0; i < addressList.length; i++) {
  var address =
    addressList[i].line1 +
    " " +
    addressList[i].line2 +
    " " +
    addressList[i].city +
    " " +
    addressList[i].country +
    ".";
  allAddress.push(address);
}

/* This is a more generic solution, looping through the keys */
for (let i = 0; i < addressList.length; i++) {
  let objectAddress = "";
  for (let key in addressList[i]) {
    if (key !== "country") {
      objectAddress += `${addressList[i][key]} `;
    } else {
      objectAddress += `${addressList[i][key]}`;
    }
  }
  allAddress.push(objectAddress);
}

console.log(allAddress);

/*------------------
10)
Create a to do list for each
day of the week.

Your result should be an array
of strings that looks like this:

["Sunday's chores are: nothing.", "Monday's chores are: tidying, vacuuming, dishes.", 
"Tuesday's chores are: nothing.", (etcetera)]

Hint: to accomplish this, you will
need to combine a lot of the things you've
learned from previous activities. Go back
and look at them if you need help!
------------------*/

let daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let chores = {
  monday: ["tidying", "vacuuming", "dishes"],
  wednesday: ["laundry", "bills"],
  friday: ["dusting", "lawncare"]
};

let todo = [];

for (let i = 0; i < daysOfWeek.length; i++) {
  var day = daysOfWeek[i];
  if (day.toLowerCase() == "monday")
    todo.push(day + "'s chores are: " + chores.monday);
  else if (day.toLowerCase() == "wednesday")
    todo.push(day + "'s chores are: " + chores.wednesday);
  else if (day.toLowerCase() == "friday")
    todo.push(day + "'s chores are: " + chores.friday);
  else todo.push(day + "'s chores are: nothing");
}

/* This is a more generic solution, looping through the keys */
for (let day of daysOfWeek) {
  let toDoItem = `${day}'s chores are: `;
  let foundChores = false;
  for (let choreDay in chores) {
    if (choreDay.toLowerCase() === day.toLowerCase()) {
      toDoItem += `${chores[choreDay].join(", ")}.`;
      foundChores = true;
    }
  }
  if (foundChores === false) {
    toDoItem += "nothing.";
  }
  todo.push(toDoItem);
}

console.log(todo);
