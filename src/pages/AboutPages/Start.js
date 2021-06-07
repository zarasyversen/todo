import React from "react";

const Start = () => {
  return (
    <main>
      <h1>About</h1>
      <div className="section">
        <p>Here you can learn some more about the app or author.</p>
      </div>
        <section className="section">
        <h2 className="sectionHeading">Learning new things</h2>
        <p>
          .. but the main purpose of this page is to learn routes, sub-pages
          and how to render different content based on slugs
          (about/about-author). Check out some of the subpages.. and don't forget the 404 page. 
        </p>
      </section>
    </main>
  );
};

export default Start;
