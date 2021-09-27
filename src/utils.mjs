
// ---------- Random Name Generator ----------
// Enter [First name array, Last name array]

 export function generateName(names) {

  // First and last name arrays 
  var firstnames = names[0];
  var lastnames = names[1];

  // -- Name Vars --
  var fname = "";
  var lname = "";

  // First Name
  var firstIndex = Math.floor(Math.random() * firstnames.length);
  fname = firstnames[firstIndex];

  // Last Name
  var lastIndex = Math.floor(Math.random() * lastnames.length);
  lname = lastnames[lastIndex];

  // Combine Full Name and return
  var fullname = fname + " " + lname;
  return fullname;

};

// ---------- Character Class ----------

class Character {

  constructor(name, age, race, gender) {

    this.name = name;
    this.age = age;
    this.race = race;
    this.gender = gender;

  }

}
