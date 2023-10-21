class Student{
    constructor(id, name, department, semester, coursesEnrolledIn, completedCourse){
        this.id = id;
        this.name = name;
        this.department = department;
        this.semester = semester;
        this.coursesEnrolledIn = coursesEnrolledIn ;
        this.completedCourse = completedCourse ;
    }
} 

module.exports = Student;