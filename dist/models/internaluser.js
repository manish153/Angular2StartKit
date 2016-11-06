var mongoose = require('mongoose');
mongoose.set('debug', true);
var Schema = mongoose.Schema;

var InternalUserSchema = new Schema({
	
    BusinessUnit: String,
    Address: String,
    Status: String,
    JobStartDate: String,
    JobEndDate: String,
    FirstName: String,
    LastName: String,
    Email: String,
    DOB: String,
    SupervisorEmail: String,
    SupervisorLastName: String,
    SupervisorFisrtName: String        
        
 });

module.exports = mongoose.model('InternalUser', InternalUserSchema,'internalusers');