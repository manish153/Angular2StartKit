var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BusinessUnitSchema = new Schema({
	businessUnitID: String,
	BusinessUnitName: String,
	BusinessUnitLocation: String	
 });

module.exports = mongoose.model('BusinessUnit', BusinessUnitSchema);