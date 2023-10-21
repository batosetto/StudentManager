const Student = require('./classes/Student');
const OngoingCourse = require('./classes/OngoingCourse');
const CompletedCourse = require('./classes/CompletedCourse');

const students =[
    new Student(1, 'Barbara', 'Computer Programming', 'Fall 2022', (
        'Java Basics', 'Computer Programming', 'Introduction to Java Programming'),
        [
        new CompletedCourse(1, 'Data Structures', 'Computer Science', 'Introduction to Data Structures', 85)]),
    new Student(2, 'Gabriela', 'Computer Programming', 'Fall 2022', [
        new OngoingCourse(1, 'Web Design', 'Design', 'Basics of Web Design with HTML and CSS', 10)],
        [
        new CompletedCourse(1, 'Mobile App Development', 'Software Engineering', 'Building apps for Android and iOS', 95)]),
    new Student(3, 'Henrique', 'Computer Programming', 'Fall 2022', [
        new OngoingCourse(1, 'Java', 'Computer Programming', 'Learn Java', 10)],
        [
        new CompletedCourse(1,'Web Design', 'Design', 'Basics of Web Design with HTML and CSS', 70)]),
    new Student(4, 'Thiely', 'Computer Programming', 'Fall 2022', [
        new OngoingCourse(1, 'Mobile App Development', 'Software Engineering', 'Building apps for Android and iOS', 10)],
        [
        new CompletedCourse(1, 'Mobile App Development', 'Software Engineering', 'Building apps for Android and iOS', 75)]),
    new Student(5, 'Victor', 'Computer Sciene', 'Summer 2020', [
        new OngoingCourse(1, 'Java', 'Computer Programming', 'Learn Java', 10)],
        [
        new CompletedCourse(1, 'Java', 'Computer Programming', 'Learn Java', 80)]),
    new Student(6, 'Gabriel', 'Computer Sciene', 'Summer 2020', [
        new OngoingCourse(1, 'Java Basics', 'Computer Programming', 'Introduction to Java Programming', 10)],
        [
        new CompletedCourse(1, 'Web Design', 'Design', 'Basics of Web Design with HTML and CSS', 90)]),
    new Student(7, 'Gustavo', 'Computer Sciene', 'Winter 2019', [
        new OngoingCourse(1, 'Machine Learning', 'Artificial Intelligence', 'Introductory course to ML', 10)],
        [
        new CompletedCourse(1, 'Advanced Python', 'Computer Programming', 'Deep dive into Python', 95)]),
    new Student(8, 'Julia', 'Information Technology', 'Winter 2021', [
        new OngoingCourse(1, 'Machine Learning', 'Artificial Intelligence', 'Introductory course to ML', 10)],
        [
        new CompletedCourse(1, 'Data Structures', 'Computer Science', 'Introduction to Data Structures', 80)])

];

const ongoingCourses = [
    new OngoingCourse(1, 'Java Basics', 'Computer Programming', 'Introduction to Java Programming', 10),
    new OngoingCourse(2, 'Advanced Python', 'Computer Programming', 'Deep dive into Python', 5),
    new OngoingCourse(3, 'Web Design', 'Design', 'Basics of Web Design with HTML and CSS', 15),
    new OngoingCourse(4, 'Data Structures', 'Computer Science', 'Introduction to Data Structures', 20),
    new OngoingCourse(5, 'Machine Learning', 'Artificial Intelligence', 'Introductory course to ML', 10),
    new OngoingCourse(6, 'Database Management', 'IT', 'Basics of SQL and Databases', 8),
    new OngoingCourse(7, 'Mobile App Development', 'Software Engineering', 'Building apps for Android and iOS', 12)
];

function calculateAverageGrade(completedCourse){
    if(completedCourse === 0) return 0;

    const totalGrade = completedCourse.reduce((sum, completedCourse) => sum + completedCourse.gradeAchieved, 0);
    return totalGrade / completedCourse.length;
}

module.exports = {
    students,
    ongoingCourses,
    calculateAverageGrade 
}

