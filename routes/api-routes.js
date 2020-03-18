const db = require("../models");

module.exports = function(app) {

// add exercises to a workout
app.put("/api/workouts", ({ body }, res) => {
  db.Workout.insert(body, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
});

// create workouts
app.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
  .then(workout => {
    res.json(workout);
  })
  .catch(err => {
    res.json(err);
  });
});

// get workouts in range
app.get("/api/workouts/range", (req, res) => {
  db.User.find({})
    .populate("notes")
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});
}
