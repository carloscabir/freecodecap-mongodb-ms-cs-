require("dotenv").config();

const mongoose = require("mongoose");
const validator = require("validator");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((m) => {
    console.log("Connected to DB");
    return m.connection.getClient();
  });

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
  contactEmail: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: (value) => {
      return validator.isEmail(value);
    },
  },
  createdAt: { type: Date, default: Date.now },
});

let Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  Person.create(
    {
      name: "John",
      age: 30,
      favoriteFoods: ["Pizza"],
      contactEmail: "noemail@gmail.com",
    },
    (err, data) => {
      if (err) return console.log(err);
      done(null, data);
      return data;
    }
  );
};

const arrayOfPeople = [
  {
    name: "John",
    age: 30,
    favoriteFoods: ["Pizza"],
    contactEmail: "noemail@gmail.com",
  },
  {
    name: "Carlos",
    age: 16,
    favoriteFoods: ["Chicken Nuggets", "Tacos", "Mac n Cheese"],
    contactEmail: "noemail@gmail.com",
  },
  {
    name: "Abby",
    age: 17,
    favoriteFoods: ["Chicken Nuggets", "Steak", "Mac n Cheese"],
    contactEmail: "noemail@gmail.com",
  },
  {
    name: "Vale",
    age: 16,
    favoriteFoods: ["Tacos", "Strawberries"],
    contactEmail: "noemail@gmail.com",
  },
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    if (err) return console.log(err);
    done(null, data);
    return data;
  });
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
