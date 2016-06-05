var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ApartmentSchema = new Schema({
	unitID: String,
	UnitType: String,
	BusinessUnit:String,
	UnitAddress: String,
    UnitStatus: String,
    UnitResidentID: String,   /*how to make this an array ??*/
    UnitLeaseStartDate: String,
    UnitLeaseEndDate: String,
    UserEmail: String,
    userFirstName: String
 });

module.exports = mongoose.model('Apartment', ApartmentSchema);