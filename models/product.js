const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

const schema = Schema({
    _description:String,
    _category:String,
    _price:Number
});

class Product {
    constructor(description, category, price){
        this._description = description;
        this._categoryh = category;
        this._price = price;
        this._category = category;
    }


    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get category() {
        return this._category;
    }

    set category(value) {
        this._category = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }
}

schema.plugin(mongoosePaginate);
schema.loadClass(Product);
module.exports = mongoose.model('Product', schema);
