import React from "react";

const Article = ({ a }) => {
  return (
    <>
      <h1>{a.title}</h1>
      {a.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
    </>
  );
};

export default Article;
