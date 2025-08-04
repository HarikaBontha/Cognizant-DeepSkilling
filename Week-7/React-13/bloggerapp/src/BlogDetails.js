// src/BlogDetails.js
import React from 'react';

const blogs = [
  { id: 1, title: "React Basics", date: "2025-08-01" },
  { id: 2, title: "Hooks in Depth", date: "2025-08-02" },
  { id: 3, title: "Advanced JSX", date: "2025-08-03" },
];

const BlogDetails = () => {
  return (
    <div>
      <h2>📰 Blog List</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            {blog.title} <em>({blog.date})</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogDetails;
