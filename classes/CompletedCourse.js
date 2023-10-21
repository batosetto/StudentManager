const Course = require('./Course.js');

class CompletedCourse extends Course{
    constructor(id, name, department, description, gradeAchieved){
        super(id, name, department, description);
        this.gradeAchieved = gradeAchieved;   
    }
}

module.exports = CompletedCourse;