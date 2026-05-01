# 🎓 School ERP Platform

A comprehensive Enterprise Resource Planning (ERP) system for schools built with Node.js, Express, and modern web technologies.

## Features

### Student Management
- ✅ Add, view, edit, and delete student records
- ✅ Track student details (name, email, phone, class, roll number)
- ✅ Manage joining dates and addresses

### Teacher Management
- ✅ Manage teacher profiles
- ✅ Track subject specializations and qualifications
- ✅ Monitor teaching experience and department assignments

### Class Management
- ✅ Create and manage classes
- ✅ Assign class teachers
- ✅ Track class strength and room assignments

### Attendance System
- ✅ Record daily attendance
- ✅ Track attendance by date and class
- ✅ View attendance reports and statistics

### Grade Management
- ✅ Record student grades for subjects
- ✅ Auto-calculate grade letters based on marks
- ✅ Track marks by term or examination

### Dashboard Analytics
- 📊 Real-time statistics
- 📈 Total students, teachers, and classes count
- 📉 Average attendance percentage
- 🎯 Average marks across all students

## Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **In-Memory Arrays** - Data storage (no database required)

### Frontend
- **HTML5** - Markup structure
- **CSS3** - Styling and responsive design
- **Vanilla JavaScript** - Interactive functionality

### DevOps
- **Docker** - Containerization
- **Jenkins** - CI/CD Pipeline
- **Alpine Linux** - Lightweight base image

## Installation

### Prerequisites
- Node.js 18+
- npm or yarn
- Docker (for containerized deployment)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vipvishnu12/school-erp-platform.git
   cd school-erp-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the application**
   ```bash
   npm start
   ```

4. **Access the application**
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Docker Deployment

### Build Docker Image
```bash
docker build -t school-erp:latest .
```

### Run Docker Container
```bash
docker run -d -p 3000:3000 --name school-erp-container school-erp:latest
```

### Using Docker Compose (Optional)
```bash
docker-compose up -d
```

## API Endpoints

### Students
- `GET /api/students` - Get all students
- `POST /api/students` - Create new student
- `PUT /api/students/:id` - Update student
- `DELETE /api/students/:id` - Delete student

### Teachers
- `GET /api/teachers` - Get all teachers
- `POST /api/teachers` - Create new teacher
- `PUT /api/teachers/:id` - Update teacher
- `DELETE /api/teachers/:id` - Delete teacher

### Classes
- `GET /api/classes` - Get all classes
- `POST /api/classes` - Create new class
- `DELETE /api/classes/:id` - Delete class

### Attendance
- `GET /api/attendance` - Get attendance records
- `POST /api/attendance` - Record attendance

### Grades
- `GET /api/grades` - Get grades
- `POST /api/grades` - Add grade

### Dashboard
- `GET /api/dashboard` - Get statistics

## Project Structure

```
.
├── app.js                 # Main Express application
├── package.json          # Project dependencies
├── package-lock.json     # Dependency lock file
├── Dockerfile           # Docker configuration
├── Jenkinsfile          # Jenkins CI/CD pipeline
├── public/              # Static files
│   └── index.html       # Frontend UI
├── README.md            # Project documentation
└── .gitignore           # Git ignore rules
```

## Usage Guide

### Dashboard
The dashboard displays key statistics:
- Total number of students
- Total number of teachers
- Total number of classes
- Average attendance percentage
- Average marks across all students

### Adding Students
1. Navigate to the "Students" tab
2. Fill in the student form with required information
3. Click "Add Student" button

### Recording Attendance
1. Go to the "Attendance" tab
2. Enter student ID, date, and attendance status
3. Click "Record Attendance"

### Adding Grades
1. Navigate to the "Grades" tab
2. Enter student ID, subject, and marks
3. Grade is auto-calculated (optional manual entry)
4. Click "Add Grade"

## Data Storage

This application uses **in-memory arrays** as the database. Data is stored during the application's runtime and will be reset when the server restarts.

**Note:** For production use, consider integrating a persistent database like MongoDB, PostgreSQL, or MySQL.

## Jenkins Pipeline

The included `Jenkinsfile` provides automated CI/CD:
1. **Verify Files** - Check workspace contents
2. **Build Docker Image** - Create Docker image
3. **Stop Old Container** - Remove previous container
4. **Run Container** - Deploy new container
5. **Verify Running** - Confirm deployment success

## Performance & Security

### Performance Tips
- Lightweight Alpine base image (5MB)
- Minimal dependencies
- Fast API response times

### Security Considerations
- Input validation on API endpoints
- CORS configuration (add as needed)
- Environment variables support

## Future Enhancements

- [ ] Persistent database integration
- [ ] User authentication and authorization
- [ ] Advanced reporting and exports
- [ ] Email notifications
- [ ] Mobile app support
- [ ] Real-time updates using WebSockets

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac
lsof -i :3000
kill -9 <PID>
```

### Docker Issues
```bash
# Clear unused images
docker system prune -a

# Check container logs
docker logs school-erp-container
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Author

**Vishnu** - [GitHub](https://github.com/Vipvishnu12)

## Support

For issues and questions, please open an issue on the GitHub repository.

---

**Built with ❤️ for school management**
