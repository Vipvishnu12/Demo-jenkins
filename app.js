const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ============ IN-MEMORY DATABASE ============
let database = {
    students: [
        { id: 1, name: 'Raj Kumar', email: 'raj@school.com', phone: '9876543210', class: '10A', rollNo: 1, joiningDate: '2023-01-15', address: '123 Main Street' },
        { id: 2, name: 'Priya Singh', email: 'priya@school.com', phone: '9876543211', class: '10B', rollNo: 2, joiningDate: '2023-01-16', address: '456 Oak Avenue' }
    ],
    teachers: [
        { id: 1, name: 'Dr. Arjun Patel', email: 'arjun@school.com', phone: '9876543220', subject: 'Mathematics', qualification: 'M.Tech', experience: 8, department: 'Science' },
        { id: 2, name: 'Ms. Neha Sharma', email: 'neha@school.com', phone: '9876543221', subject: 'English', qualification: 'M.A', experience: 5, department: 'Languages' }
    ],
    classes: [
        { id: 1, name: '10A', section: 'A', strength: 45, classTeacher: 'Dr. Arjun Patel', room: '10A' },
        { id: 2, name: '10B', section: 'B', strength: 42, classTeacher: 'Ms. Neha Sharma', room: '10B' }
    ],
    attendance: [
        { id: 1, studentId: 1, date: '2024-05-01', status: 'Present', classId: 1 },
        { id: 2, studentId: 2, date: '2024-05-01', status: 'Present', classId: 2 }
    ],
    grades: [
        { id: 1, studentId: 1, subject: 'Mathemaffftics', marks: 85, grade: 'A', term: 'Term 1' },
        { id: 2, studentId: 2, subject: 'English', marks: 90, grade: 'A+', term: 'Term 1' }
    ]
};

let idCounters = {
    students: 2,
    teachers: 2,
    classes: 2,
    attendance: 2,
    grades: 2
};

// ============ STUDENT ROUTES ============
app.get('/api/students', (req, res) => {
    res.json({ success: true, data: database.students });
});

app.post('/api/students', (req, res) => {
    const { name, email, phone, class: studentClass, rollNo, joiningDate, address } = req.body;
    
    if (!name || !email || !phone || !studentClass) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const newStudent = {
        id: ++idCounters.students,
        name,
        email,
        phone,
        class: studentClass,
        rollNo,
        joiningDate,
        address
    };

    database.students.push(newStudent);
    res.status(201).json({ success: true, data: newStudent, message: 'Student added successfully' });
});

app.put('/api/students/:id', (req, res) => {
    const student = database.students.find(s => s.id === parseInt(req.params.id));
    if (!student) {
        return res.status(404).json({ success: false, message: 'Student not found' });
    }

    const { name, email, phone, class: studentClass, rollNo, joiningDate, address } = req.body;
    if (name) student.name = name;
    if (email) student.email = email;
    if (phone) student.phone = phone;
    if (studentClass) student.class = studentClass;
    if (rollNo) student.rollNo = rollNo;
    if (joiningDate) student.joiningDate = joiningDate;
    if (address) student.address = address;

    res.json({ success: true, data: student, message: 'Student updated successfully' });
});

app.delete('/api/students/:id', (req, res) => {
    const index = database.students.findIndex(s => s.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ success: false, message: 'Student not found' });
    }

    const deleted = database.students.splice(index, 1);
    res.json({ success: true, data: deleted[0], message: 'Student deleted successfully' });
});

// ============ TEACHER ROUTES ============
app.get('/api/teachers', (req, res) => {
    res.json({ success: true, data: database.teachers });
});

app.post('/api/teachers', (req, res) => {
    const { name, email, phone, subject, qualification, experience, department } = req.body;
    
    if (!name || !email || !phone || !subject) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const newTeacher = {
        id: ++idCounters.teachers,
        name,
        email,
        phone,
        subject,
        qualification,
        experience,
        department
    };

    database.teachers.push(newTeacher);
    res.status(201).json({ success: true, data: newTeacher, message: 'Teacher added successfully' });
});

app.put('/api/teachers/:id', (req, res) => {
    const teacher = database.teachers.find(t => t.id === parseInt(req.params.id));
    if (!teacher) {
        return res.status(404).json({ success: false, message: 'Teacher not found' });
    }

    const { name, email, phone, subject, qualification, experience, department } = req.body;
    if (name) teacher.name = name;
    if (email) teacher.email = email;
    if (phone) teacher.phone = phone;
    if (subject) teacher.subject = subject;
    if (qualification) teacher.qualification = qualification;
    if (experience) teacher.experience = experience;
    if (department) teacher.department = department;

    res.json({ success: true, data: teacher, message: 'Teacher updated successfully' });
});

app.delete('/api/teachers/:id', (req, res) => {
    const index = database.teachers.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ success: false, message: 'Teacher not found' });
    }

    const deleted = database.teachers.splice(index, 1);
    res.json({ success: true, data: deleted[0], message: 'Teacher deleted successfully' });
});

// ============ CLASS ROUTES ============
app.get('/api/classes', (req, res) => {
    res.json({ success: true, data: database.classes });
});

app.post('/api/classes', (req, res) => {
    const { name, section, strength, classTeacher, room } = req.body;
    
    if (!name || !section) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const newClass = {
        id: ++idCounters.classes,
        name,
        section,
        strength,
        classTeacher,
        room
    };

    database.classes.push(newClass);
    res.status(201).json({ success: true, data: newClass, message: 'Class added successfully' });
});

app.delete('/api/classes/:id', (req, res) => {
    const index = database.classes.findIndex(c => c.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ success: false, message: 'Class not found' });
    }

    const deleted = database.classes.splice(index, 1);
    res.json({ success: true, data: deleted[0], message: 'Class deleted successfully' });
});

// ============ ATTENDANCE ROUTES ============
app.get('/api/attendance', (req, res) => {
    const classId = req.query.classId;
    const date = req.query.date;
    
    let filtered = database.attendance;
    if (classId) filtered = filtered.filter(a => a.classId === parseInt(classId));
    if (date) filtered = filtered.filter(a => a.date === date);
    
    res.json({ success: true, data: filtered });
});

app.post('/api/attendance', (req, res) => {
    const { studentId, date, status, classId } = req.body;
    
    if (!studentId || !date || !status) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const newAttendance = {
        id: ++idCounters.attendance,
        studentId,
        date,
        status,
        classId
    };

    database.attendance.push(newAttendance);
    res.status(201).json({ success: true, data: newAttendance, message: 'Attendance recorded successfully' });
});

// ============ GRADES ROUTES ============
app.get('/api/grades', (req, res) => {
    const studentId = req.query.studentId;
    
    let filtered = database.grades;
    if (studentId) filtered = filtered.filter(g => g.studentId === parseInt(studentId));
    
    res.json({ success: true, data: filtered });
});

app.post('/api/grades', (req, res) => {
    const { studentId, subject, marks, grade, term } = req.body;
    
    if (!studentId || !subject || marks === undefined) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const newGrade = {
        id: ++idCounters.grades,
        studentId,
        subject,
        marks,
        grade,
        term
    };

    database.grades.push(newGrade);
    res.status(201).json({ success: true, data: newGrade, message: 'Grade added successfully' });
});

// ============ DASHBOARD ROUTES ============
app.get('/api/dashboard', (req, res) => {
    const stats = {
        totalStudents: database.students.length,
        totalTeachers: database.teachers.length,
        totalClasses: database.classes.length,
        totalAttendanceRecords: database.attendance.length,
        averageAttendance: (database.attendance.filter(a => a.status === 'Present').length / database.attendance.length * 100).toFixed(2) + '%',
        avgMarks: (database.grades.reduce((sum, g) => sum + g.marks, 0) / database.grades.length).toFixed(2)
    };

    res.json({ success: true, data: stats });
});

// ============ SERVER ============
app.listen(3000, () => {
    console.log("🚀 School ERP Platform running on port 3000");
    console.log("📊 Visit http://localhost:3000 to access the dashboard");
});
 