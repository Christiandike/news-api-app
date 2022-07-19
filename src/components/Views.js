import React from "react";
import Button from "./Button";

const Views = ({
  results,
  statusMsg,
  pageData,
  handleNext,
  handlePrevious,
  onChange,
}) => {
  // when there is a server/client error
  if (statusMsg === "error") {
    return <p>Connection error. Check your connection or refresh the page</p>;
  }

  // when there are no results to view
  if (statusMsg === "No matches for your search.") {
    return <p>No matches for your search</p>;
  }

  //when results are found
  if (results.length > 0) {
    console.log(results);

    return (
      <div className="results-view">
        {results.map((result) => (
          <ContentView
            key={result._id}
            src={result.media}
            href={result.link}
            title={result.title}
            summary={result.summary.substring(0, 200) + "..."}
            tags={result.topic}
          />
        ))}

        <Pagination
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          onChange={onChange}
          pageData={pageData}
        />
      </div>
    );
  }

  // default page view
  return (
    <p style={{ textAlign: "center", marginTop: "1rem" }}>
      Search for any news you want
    </p>
  );
};

const ContentView = ({ src, href, title, summary, tags }) => (
  <div className="main-view-wrapper">
    <div className="view-img-wrapper">
      <img src={src} alt="Publication cover" />
    </div>
    <div className="view-content">
      <div className="view-header">
        <h4>
          <a href={href} target="_blank" rel="noreferrer">
            {" "}
            {title}{" "}
          </a>
        </h4>
        <p className="tags"> {tags} </p>
        <p className="view-desc"> {summary} </p>
        <div className="btn-wrap">
          <a href={href} target="_blank" rel="noreferrer">
            <button className="page-btn">Read More</button>
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Pagination = ({ handleNext, handlePrevious, pageData, onChange }) => {
  const { page, totalPages } = pageData;
  const pageArray = [];
  for (let i = 1; i <= totalPages; i++) {
    pageArray.push(i);
  }

  return (
    <div className="page-btns">
      <p className="page-count">
        Page {page} of {totalPages}{" "}
      </p>
      <select className="select-list" onChange={onChange}>
        {pageArray.map((page) => (
          <PageOptions key={page} value={page} />
        ))}
      </select>
      <Button text="Previous" onClick={handlePrevious} />
      <Button text="Next" onClick={handleNext} />
    </div>
  );
};

const PageOptions = ({ value, onClick }) => (
  <option value={value} onClick={onClick}>
    {" "}
    {value}{" "}
  </option>
);

export default Views;
