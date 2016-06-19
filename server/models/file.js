var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FileSchema = new Schema({
	originalname: String,
	filename: String,
	_idapt: String	
 });

module.exports = mongoose.model('File', FileSchema);