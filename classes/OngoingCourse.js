const Course = require('./Course.js');

class OngoingCourse extends Course{
    constructor(id, name, department, description, numRemainingSeats){
        super(id, name, department, description);
        this.numRemainingSeats = numRemainingSeats;
    }
}

module.exports = OngoingCourse;