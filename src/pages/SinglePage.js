import React from "react";
import { useParams } from "react-router-dom";

const SinglePages = () => {
  const aboutData = [
    {
      slug: "about-app",
      title: "About the App",
      description:
        "In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items. Built from turorial from the amazing @ibaslogic.",
    },
    {
      slug: "about-author",
      title: "About the Author",
      description:
        "I'm Zara and I love learning. Check out some more projects on my Github",
    },
  ];
  const { slug } = useParams();
  const aboutContent = aboutData.find((item) => item.slug === slug);
  const { title, description } = aboutContent;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default SinglePages;
