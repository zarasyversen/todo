import React from "react";
import { useParams } from "react-router-dom";

const SinglePages = () => {
  const aboutData = [
    {
      slug: "about-app",
      title: "About the App",
      description: (
        <>
        <section className="section">
          <h2 className="sectionHeading">What does this app do?</h2>
          <p>
            In this app, you can add, delete and edit tasks. You can also search
            for tasks.
          </p>
          <p>
            This app will persist your data in the browser local storage. So
            whether you reload, close your app or reopened it, you still have
            access to your to-do items.
          </p>
        </section>
        <section className="section">
        <h2 className="sectionHeading">How was this app built?</h2>
          <p>This project was originally based off a really great tutorial by <a href="https://ibaslogic.com/" target="_blank" rel="noopener">ibaslogic.</a></p>
          <p>I have amended and added quite a few things:</p>
          <ul>
            <li>Rewrote adding todo to be visible only when you click a button "Add Task".</li>
            <li>
              Added an edit button (previously the todo was editable on double
              click) and automatically focus on input.
            </li>
            <li>Added ability to search and show filtered results</li>
            <li>Improved accessiblity</li>
            <li>Added counter</li>
            <li>Added time and day for each task</li>
            <li>Add logic to handle what the app looks like with no items</li>
            <li>Restyled and reorganised CSS and file struture</li>
          </ul>
        </section>
     
        </>
      ),
    },
    {
      slug: "about-author",
      title: "About the Author",
      description: (
        <div className="section">
          <p>
            I'm Zara and I love learning. Check out some more projects on <a href="https://github.com/zarasyversen" target="_blank" rel="noopener">my
            Github</a> or <a href="https://twitter.com/madebyzara" target="_blank" rel="noopener">follow me on Twitter.</a>
          </p>
        </div>
   
      ),
    },
  ];
  const { slug } = useParams();
  const aboutContent = aboutData.find((item) => item.slug === slug);
  const { title, description } = aboutContent;
  return (
    <main>
      <h1>{title}</h1>
      <div className="description">{description}</div>
    </main>
  );
};

export default SinglePages;
