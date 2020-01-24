let mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema(
    {
        value:{
            type: Number,
            required: [true, "You need to rate the cake in order to leave a comment"]
        },
        content:{
            type: String,
        },
        _cake: {
            type: mongoose.Types.ObjectId,
            ref: 'Cake'
        }
    },{
        timestamp: true
    }
)

mongoose.model('Rating', RatingSchema);