import React from "react";
import Button from "./Button";
import cycling from "../media/Cycling.jpg";
import elonmusk from "../media/Elon-Musky.jpg";
import peakyblinders from "../media/Peaky-Blinders.jpeg";
import ukraine from "../media/Ukraine-Photo.jpg";
import errorImg from "../media/404-error.gif";

const Views = ({
  results,
  statusMsg,
  pageData,
  handleNext,
  handlePrevious,
  onChange,
  handleBusiness,
  handleMovies,
  handleSports,
  handleUkraine,
  setIsLoading,
}) => {
  // when there is a server/client error
  if (statusMsg === "error") {
    return null;
  }

  // when there are no results to view/ invalid search query
  if (statusMsg === "No matches for your search.") {
    setIsLoading(false);
    return (
      <div className="bad-query-wrapper">
        <p className="bad-query-big">
          <span className="red">Oops!</span> We can't seem to find what you're
          looking for<span className="red">.</span>
        </p>
        <p className="bad-query-small">
          Try to make your search more specific like "stock market", and check
          for typos.
        </p>
        <div className="err-img">
          <img src={errorImg} alt="" />
        </div>
      </div>
    );
  }

  //when results are found/ valid query
  if (results.length > 0) {
    setIsLoading(false);
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
            btnText="Read More"
            target="_blank"
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

  // default page view/home page
  return (
    <div className="default-view" id="home">
      <h1>
        Stay <span className="red">up to date</span> on your favourite{" "}
        <span className="red">topics</span>, people and interests
        <span className="red">.</span>
      </h1>

      <div className="default-main">
        <div className="def-main-1">
          <ContentView
            src={elonmusk}
            title="Business"
            summary="Always stay one step ahead with all the latest business updates."
            btnText="Business News"
            onClick={handleBusiness}
          />
        </div>

        <div className="def-main-2">
          <ContentView
            src={cycling}
            title="Sports"
            summary="Be in sync with alll your favourite sports and events."
            btnText="Sports News"
            onClick={handleSports}
          />
        </div>

        <div className="def-main-3">
          <ContentView
            src={peakyblinders}
            title="Movies &amp; TV"
            summary="Never miss a thing about the movies and TV shows you love."
            btnText="Movies & TV"
            onClick={handleMovies}
          />
        </div>

        <div className="def-main-4">
          <ContentView
            src={ukraine}
            title="Ukraine"
            summary="Follow all the events and stories in Ukraine as they happen."
            btnText="Ukraine"
            onClick={handleUkraine}
          />
        </div>
      </div>
    </div>
  );
};

const ContentView = ({
  src,
  href,
  title,
  summary,
  tags,
  btnText,
  target,
  onClick,
}) => (
  <div className="main-view-wrapper">
    <div className="view-img-wrapper">
      <img src={src} alt="Publication cover" />
    </div>
    <article className="view-content">
      <div className="view-header">
        <h4>
          <a href={href} target={target} rel="noreferrer">
            {" "}
            {title}{" "}
          </a>
        </h4>
        <p className="tags"> {tags} </p>
        <p className="view-desc"> {summary} </p>
        <div className="btn-wrap">
          <a href={href} target="_blank" rel="noreferrer">
            <button className="page-btn" onClick={onClick}>
              {btnText}{" "}
              <span className="material-symbols-outlined">arrow_forward</span>{" "}
            </button>
          </a>
        </div>
      </div>
    </article>
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
