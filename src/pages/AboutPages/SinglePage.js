import React from "react";
import { useParams } from "react-router-dom";

const SinglePages = () => {
  const aboutData = [
    {
      slug: "about-app",
      title: "About the App",
      description:
        <>
          <p>In this app, you can add, delete and edit tasks. You can also search for tasks.</p>
          <p>This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items.</p>
          <p>This project was originally based off a tutorial by @ibaslogic</p>
          <p>I have amended and added a few things:</p>
          <ul>
            <li>Rewrote adding todo to be visible only on "Add Task" click</li>
            <li>Added an edit button (previously the todo was editable on double click</li>
            <li>Added ability to search and show filtered results</li>
            <li>Enhanced accessiblity and clearer UX</li>
            <li>Added counter</li>
            <li>Restyled and reorganised CSS and file struture</li>
          </ul>
        </>,
    },
    {
      slug: "about-author",
      title: "About the Author",
      description:
        <p>I'm Zara and I love learning. Check out some more projects on my Github</p>,
    },
  ];
  const { slug } = useParams();
  const aboutContent = aboutData.find((item) => item.slug === slug);
  const { title, description } = aboutContent;
  return (
    <main>
      <h1>{title}</h1>
      {description}
    </main>
  );
};

export default SinglePages;
