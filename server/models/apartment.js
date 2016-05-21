var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ApartmentSchema = new Schema({
	unitID: String,
	UnitType: String
});

module.exports = mongoose.model('Apartment', ApartmentSchema);