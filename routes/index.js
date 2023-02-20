
const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});


// Route to display a list of all celebrities
router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render("celebrities/celebrities", { celebrities });
    })
    .catch((err) => {
      next(err);
    });
});

// Route to display the form to create a new celebrity
router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new-celebrity");
});


// Route to handle the creation of a new celebrity
router.post("/celebrities", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({ name, occupation, catchPhrase })
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch((err) => {
      res.render("celebrities/new-celebrity");
    });
});


// Route to display a list of all movies
router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.render("movies/movies", { movies });
    })
    .catch((err) => {
      next(err);
    });
});

// Route to display the form to create a new movie
router.get("/movies/new", (req, res, next) => {
  res.render("movies/new-movie");
});

// Route to handle the creation of a new movie
router.post("/movies", (req, res, next) => {
  const { title, genre, plot } = req.body;

  Movie.create({ title, genre, plot })
    .then(() => {
      res.redirect("/movies");
    })
    .catch((err) => {
      res.render("movies/new-movie");
    });
});

module.exports = router;
