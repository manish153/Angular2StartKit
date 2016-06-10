var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ApartmentSchema = new Schema({
	unitID: String,
	UnitType: String,
	BusinessUnit:String,
    aptID: String,
    aptType: String,
    BusinessUnit: String,
    aptDesc: String,
    aptAddress: String,
    aptStatus: String,
    leaseStartDate: String,
    leaseEndDate: String,
    residentFirstName: String,
    residentLastName: String,
    residentEmail: String,
    residentDOB: String,
    secondaryResidentFirstName: String,
    secondaryResidentLastName: String,
    secondaryResidentEmail: String,
    secondaryResidentDOB: String,
    rentAmount: String,
    lastPaymentDate: String,
    nextPaymentDate: String,
    paymentMethod: String,
    userFirstName: String

 });

module.exports = mongoose.model('Apartment', ApartmentSchema);