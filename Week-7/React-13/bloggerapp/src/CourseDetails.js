// src/CourseDetails.js
import React from 'react';

const courses = [
  { id: 1, name: "React", duration: "6 weeks" },
  { id: 2, name: "JavaScript", duration: "4 weeks" },
  { id: 3, name: "Node.js", duration: "5 weeks" },
];

const CourseDetails = () => {
  return (
    <div>
      <h2>🎓 Course List</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            {course.name} - {course.duration}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;
