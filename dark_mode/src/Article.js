import React from "react";
import moment from 'moment'

const Articles = ({ title, snippet, date, length }) => {
  return (
    <article className="post">
      <h3>  Title : {title}</h3>
      <div className="post-info">
        <span>  Date : {moment(date).format("dddd Do, YYYY")}</span>
        <span> {length} min read</span>
      </div>
      <p> {snippet}</p>
    </article>
  );
};
export default Articles;
