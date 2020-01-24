let mongoose = require('mongoose');


const CakeSchema = new mongoose.Schema(
    {
        baker: {
            type: String,
            require: [true, "You need to input a bakers name"],
            minlength: [2, "Bakers name needs to be at least 2 characters long"]
        },
        imgLink: {
            type: String,
            require: [true, "Please find a link to post for the image"],
            minlength: [2, "Img Link is invalid"]
        },
        _ratings: [{
            type: mongoose.Types.ObjectId,
            ref: 'Rating'
        }]
    },
    {
        timestamps: true
    }
)

mongoose.model('Cake',CakeSchema);
