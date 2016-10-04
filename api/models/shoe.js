var mongoose = require('mongoose');


var todoSchema = mongoose.Schema({
    title: {
        type: String
    },
    subtitle: {
        type: String
    },
    price: {
        type: String
    },
    discount_price: {
        type: String
    },
    description: {
        type: String
    },
    heart: {
        type: Boolean
    },
    bag: {
        type: Boolean
    },

    discount: {
        type: Boolean
    },
    exclusive: {
        type: Boolean
    },
    news: {
        type: Boolean
    },
    small: {
        type: Boolean
    },
    show_description: {
        type: Boolean
    },
    img_url: {
        type: String
    },
    background_image:{
        type:Boolean
    }
});


module.exports = mongoose.model('Shoe', todoSchema);

