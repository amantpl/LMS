import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importing different page components for student routes
import Home from './pages/student/Home';
import CoursesList from './pages/student/CoursesList';
import CourseDetails from './pages/student/CourseDetails';
import MyEnrollments from './pages/student/MyEnrollments';
import Player from './pages/student/Player';
import Loading from './component/student/Loading'; 

// Importing educator-related pages
import Educator from './pages/educator/Educator';
import Dashboard from './pages/educator/Dashboard';
import AddCourse from './pages/educator/AddCourse';
import MyCourses from './pages/educator/MyCourses';
import StudentsEnrolled from './pages/educator/StudentsEnrolled';

// Main App Component
const App = () => {
  return (
    <div>
      {/* Define all routes for the application */}
      <Routes>
        {/* Default home page route */}
        <Route path='/' element={<Home />} />

        {/* Route for displaying all available courses */}
        <Route path='/course-list' element={<CoursesList />} />

        {/* Dynamic route: Displays filtered courses based on input (e.g., search/filter category) */}
        <Route path='/course-list/:input' element={<CoursesList />} /> 

        {/* Dynamic route: Shows details of a specific course by course ID */}
        <Route path='/course/:id' element={<CourseDetails />} />

        {/* Route for showing the user's enrolled courses */}
        <Route path='/my-enrollments' element={<MyEnrollments />} />

        {/* Dynamic route: Loads the video player for a specific course */}
        <Route path='/player/:courseId' element={<Player />} />

        {/* Dynamic route: Loading screen based on a given path */}
        <Route path='/loading/:path' element={<Loading />} />

        {/* Nested routes for educator-related pages */}
        <Route path='/educator' element={<Educator />}>
          {/* Default dashboard route for educators */}
          <Route path='educator' element={<Dashboard />} />

          {/* Route for adding a new course */}
          <Route path='add-course' element={<AddCourse />} />

          {/* Route for managing the educator's own courses */}
          <Route path='my-courses' element={<MyCourses />} />

          {/* Route for viewing students enrolled in the educator's courses */}
          <Route path='student-enrolled' element={<StudentsEnrolled />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;


