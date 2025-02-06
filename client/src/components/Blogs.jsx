import React from 'react';
import "../styles/Blogs.scss";

const Blogs = () => {
    const blogs = [
        { title: 'Mathematics: The Hidden UI of the Universe', link: 'https://medium.com/@pythonicforge/mathematics-the-hidden-ui-of-the-universe-c3ad0339ff68', date: '2024-11-18' },
        { title: 'The Code That Runs the Universe', link: 'https://medium.com/@pythonicforge/the-code-that-runs-the-universe-how-physics-and-programming-might-be-one-and-the-same-8d7aba2ab135', date: '2024-11-11' },
        { title: 'The Funniest Coding Mistakes I\'ve Made', link: 'https://medium.com/@pythonicforge/the-funniest-coding-mistakes-ive-made-340f819f66c4', date: '2024-11-09' },
    ];

    return (
        <div className="blogs-inner-container">
        {blogs.map((blog, index) => (
            <div key={index} className="blog-data">
                    <span className="blog-date"> {blog.date}</span>
                    <a href={blog.link} target="_blank" rel="noopener noreferrer" className="blog-title">{blog.title}</a>
            </div>
            ))}
        </div>
    );
};

export default Blogs