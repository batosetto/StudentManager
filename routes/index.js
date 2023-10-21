var express = require('express');
var router = express.Router();
const {students, ongoingCourses, calculateAverageGrade} = require('../data.js');

router.use(express.json());

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Assignment1 - Modern Web Technologies' });
});

router.get('/students', (req,res) => {
  res.render('students', {title: 'Students',
                          studentsList: students})
});

router.get('/ongoingcourses', (req,res) => {
  res.render('ongoingcourses', {title: 'Ongoing Courses',
                                coursesList: ongoingCourses})
});

router.get('/student/:id', (req,res)=>{
  const studentID = parseInt(req.params.id);
  const student = students.find(student => student.id === studentID);

  if (!student){
    res.status(404).send('Student not found');
    return;
  }
    averageGrade = calculateAverageGrade(student.completedCourse);

  res.render('student-detail', {title: 'Student Detail', student, averageGrade});
});

router.get('/filter-ongoingcourses', (req, res) => {
  res.render('filter-ongoingcourses-form', { title: 'Filter Ongoing Courses' });
});

router.post('/filter-ongoingcourses', (req,res)=>{
  const {id, name, department} = req.body;
    
  const filteredCourses = ongoingCourses.filter(course => {
    if (id && course.id !== parseInt(id)) return false;
    if (name && !course.name.includes(name)) return false;
    if (department && !course.department.includes(department)) return false;
    return true;
  });

  res.render('ongoingcourses', {title: 'Ongoing Courses', coursesList: filteredCourses});
});


router.get('/filter-students', (req,res)=>{
  res.render('filter-students-form', {title: 'Filter Students'})
});

router.post('/filter-students', (req,res)=>{
  const {id, name, department, enrolledCourse, completedCourse} = req.body;

  const filteredStudents = students.filter(student => {
    if (id && student.id !== parseInt(id)) return false;
    if (name && !student.name.includes(name)) return false;
    if (department && !student.department.includes(department)) return false;

    return true;
  });

  res.render('students', {title: 'Filtered Students', studentsList: filteredStudents})
});

module.exports = router;
