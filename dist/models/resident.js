var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ResidentSchema = new Schema({
	residentID: String,
	UnitType: String,
	FirstName:String,
	Lastname: String,
    CreditCheck: String,
    DateOfBirth: String
 });

module.exports = mongoose.model('Resident', ResidentSchema);