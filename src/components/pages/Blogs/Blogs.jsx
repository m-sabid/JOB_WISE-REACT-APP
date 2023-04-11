import React, { useEffect, useState } from "react";
import Nav from "../../shared/nav/Nav";
import AppHeader from "../../shared/AppHeader";
import Footer from "../../shared/footer/Footer";
import Blog from "./component/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("Blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  });

  return (
    <>
      <div className="my-container">
        <Nav />
        {/* Header */}
        <AppHeader title="Blogs Page" />

        {/* Blogs */}

        {blogs.map((dt) => {
          return (
            <div key={dt.id}>
              <Blog
                blogImage={dt.blogImage}
                title={dt.question}
                author={dt.author}
                time={dt.time}
                answer={dt.answer}
              />
            </div>
          );
        })}

        {/* Blogs */}
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Blogs;
