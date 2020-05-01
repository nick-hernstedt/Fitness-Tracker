//requiring express and passing the router directly on instead of adding another variable
const router = require("express").Router();
//requiring my workout model and calling it fitness to avoid "workout" confusion
const Fitness = require(`../models/index.js`);

//creating my workout
router.post(`/api/workouts`, (req, res) => {
  Fitness.create({}).then((dbWorkouts) => {
    res.json(dbWorkouts);
  });
});

//findng the workout I just created an updating it with the clients responses
router.put("/api/workouts/:id", ({ body, params }, res) => {
  Fitness.findByIdAndUpdate(params.id, { $push: { exercises: body } }).then(
    (dbWorkouts) => {
      res.json(dbWorkouts);
    }
  );
});

//finding last workout
router.get("/api/workouts", (req, res) => {
  Fitness.find().then((dbWorkouts) => {
    res.json(dbWorkouts);
  });
});

//finding all workouts for the stats page
router.get("/api/workouts/range", ({ query }, res) => {
  Fitness.find().then((dbWorkouts) => {
    res.json(dbWorkouts);
  });
});

module.exports = router;
