var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
	taskname: String,
	taskdesc: String,
	taskcreator:String,
	createddate: String,
    assignedto: String,
    taskstatus: String
 });

module.exports = mongoose.model('Task', TaskSchema);