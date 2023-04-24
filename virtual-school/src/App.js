// import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Chat from "./components/Pages/Chat";
import Exam from "./components/Pages/Exam";
import Landing from "./components/Pages/Landing";
import Resource from "./components/Pages/Resource";
import Result from "./components/Pages/Result";
import Admin from "./components/Pages/Admin";
import StudentDashboard from "./components/Pages/StudentDashboard";
import Login from "./components/Pages/Login";
import AuthProvider from "./components/Pages/AuthContext";
import SchoolEntry from "./components/Pages/SchoolEntry";
import CourseEntry from "./components/Pages/CourseEntry";
import EducatorEntry from "./components/Pages/EducatorEntry";
import StudentEntry from "./components/Pages/StudentEntry";
import Educator from "./components/Pages/Educator";
import Examschedule from "./components/Pages/Examschedule";
import AllCourse from "./components/Pages/AllCourse";


function App() {
  return (

    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/admin/student" element={<StudentEntry />} />
          <Route path="/admin/course" element={<CourseEntry />} />
          <Route path="/admin/allcourse" element={<AllCourse />} />

          <Route path="/admin/educator" element={<EducatorEntry />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/admin/school" element={<SchoolEntry />} />
          <Route path="/student/resources" element={<Resource />} />
          <Route path="student/exams" element={<Exam />} />
          <Route path="student/results" element={<Result />} />
          <Route path="student/chat" element={<Chat />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/educator" element={<Educator />} />
          <Route path="/educator/examschedule" element={<Examschedule />} />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
