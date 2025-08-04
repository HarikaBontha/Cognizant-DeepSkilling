// src/App.js
import React, { useState } from 'react';
import './App.css';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [selected, setSelected] = useState("book");

  const renderComponent = () => {
    if (selected === "book") {
      return <BookDetails />;
    } else if (selected === "blog") {
      return <BlogDetails />;
    } else if (selected === "course") {
      return <CourseDetails />;
    } else {
      return <p>Please select a section.</p>;
    }
  };

  return (
    <div className="App">
      <h1>📚 Blogger App</h1>
      <div>
        <button onClick={() => setSelected("book")}>Book Details</button>
        <button onClick={() => setSelected("blog")}>Blog Details</button>
        <button onClick={() => setSelected("course")}>Course Details</button>
      </div>
      <hr />
      {renderComponent()}
    </div>
  );
}

export default App;
