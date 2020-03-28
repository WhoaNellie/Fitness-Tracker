const db = require("../models");

module.exports = function (app) {

    // get all workouts
    app.get("/api/workouts", (req, res) => {
        // console.log(body);
        db.Workout.find({}).then((data) => {
            res.json(data);
        });
    });

    // add exercises to a workout
    app.put("/api/workouts/:id", ({ body }, res) => {
            db.Workout.updateOne({ _id: req.params.id}, {
                $push: {
                    exercises: body
                }
            }).then((data) => res.json(data));
    });

// create workouts
app.post("/api/workouts", ({
    body
}, res) => {
    db.Workout.create(body)
        .then(workouts => {
            res.json(workouts);
        })
        .catch(err => {
            res.json(err);
        });
});

// get workouts in range
app.get("/api/workouts/range", (req, res) => {
    let current = new Date();
    current.setDate(current.getDate() - 7);
    db.User.find({day: {$gte: current}})
        .then(dbUser => {
            res.json(dbUser);
        })
        .catch(err => {
            res.json(err);
        });
});
}