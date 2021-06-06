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
            access to your to-dos items.
          </p>
        </section>
        <section className="section">
        <h2 className="sectionHeading">How was this app built?</h2>
        <p>This project was originally based off a really great tutorial by @ibaslogic.</p>
          <p>I have amended and added quite a few things:</p>
          <ul>
            <li>Rewrote adding todo to be visible only on "Add Task" click</li>
            <li>
              Added an edit button (previously the todo was editable on double
              click
            </li>
            <li>Added ability to search and show filtered results</li>
            <li>Enhanced accessiblity and clearer UX</li>
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
        <p>
          I'm Zara and I love learning. Check out some more projects on my
          Github
        </p>
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
