// require exprss and pass the route directly on
const router = require("express").Router();
// require my workout model
const Fitness = require(`/api/workouts`, (req, res) => {
  Fitness.create({}).then((dbWorkouts) => {
    res.json(dbWorkouts);
  });
});

// finding workout I created and updating it with the clients responses
router.put("/api/workouts/:id", ({ body, params }, res) => {
  Fitness.findByIdAndUpdate(params.id, { $push: { exercises: body } }).then(
    (dbWorkouts) => {
      res.json(dbWorkouts);
    }
  );
});

// finding last workout
router.get("/api/workouts", (req, res) => {
  Fitness.find().then((dbWorkouts) => {
    res.json(dbWorkouts);
  });
});

// finding all workouts for the stats page
router.get("/api/workouts/range", ({ query }, res) => {
  Fitness.find().then((dbWorkouts) => {
    res.json(dbWorkouts);
  });
});

module.exports = router;
