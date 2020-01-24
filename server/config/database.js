let mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/cakes',{ useNewUrlParser: true });

require('../models/Cake');
require('../models/Rating');

