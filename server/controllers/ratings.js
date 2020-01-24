let mongoose = require("mongoose"),
  Cake = mongoose.model("Cake"),
  Rating = mongoose.model("Rating");

module.exports = {
  index: (req, res) => {
    Rating.find()
      .populate("_cake")
      .exec()
      .then(allR => {
        res.json(allR);
      })
      .catch(err => {
        res.json(err);
      });
  },

  create: function(req, res) {
    // create the newest object
    let newestRating = new Rating(req.body);

    // add an attribute _cake, the parent to the newest object
    newestRating._cake = req.params.cakeId;

    // below is an acyncrous call to the database
    // thus we need to have a try/catch
    newestRating
      .save()
      .then(saveRating => {
        Cake.findOne({ _id: req.params.cakeId })
          .then(theCake => {
            theCake._ratings.push(saveRating);
            // now save that cake
            theCake
              .save() // this is a trip to the database
              .then(savedCake => {
                // output the orginal rating that we just created
                // after all the million joins
                res.json(newestRating);
              })
              .catch(err => {
                res.json(err);
              });
          })
          .catch(err => {
            res.json(err);
          });
      })
      .catch(err => {
        res.json(err);
      });
  },
  findAllRatings: (req, res) => {},
  editRating: (req, res) => {
    // req.body, {runValidtor: true}
  },
  deleteRating: (req, res) => {}
};
