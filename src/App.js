import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./components/Modal";
import Views from "./components/Views";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [popup, setPopup] = useState(false);
  const [query, setQuery] = useState("");
  const [reqBody, setReqBody] = useState({
    method: "GET",
    url: "https://free-news.p.rapidapi.com/v1/search",
    params: { q: query, lang: "en", page: "1" },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_NEWS_API_KEY,
      "X-RapidAPI-Host": "free-news.p.rapidapi.com",
    },
  });
  const [results, setResults] = useState([]);
  const [pageData, setPageData] = useState({
    page: "",
    totalPages: "",
  });
  const [statusMsg, setStatusMsg] = useState("");

  useEffect(() => {
    axios
      .request({
        ...reqBody,
        params: {
          ...reqBody.params,
          q: query,
        },
      })
      .then((res) => {
        console.log(res.data);
        setResults(res.data.articles);
        setPageData({
          page: res.data.page,
          totalPages: res.data.total_pages,
        });
        setStatusMsg(res.data.status);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reqBody, query]);

  const handlePopup = () => {
    setPopup(!popup);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setQuery(e.target.value);
      console.log(e.target.value);
    }
  };

  const handleNext = () => {
    setReqBody({
      ...reqBody,
      params: {
        ...reqBody.params,
        page: String(+reqBody.params.page + 1),
      },
    });
  };

  const handlePrevious = () => {
    if (+reqBody.params.page === 1) {
      return;
    } else {
      setReqBody({
        ...reqBody,
        params: {
          ...reqBody.params,
          page: String(+reqBody.params.page - 1),
        },
      });
    }
  };

  const handleOption = (e) => {
    console.log(e.target.value);
    setReqBody({
      ...reqBody,
      params: {
        ...reqBody.params,
        page: String(e.target.value),
      },
    });
  };

  return (
    <div className="app-wrapper">
      <Header onClick={handlePopup} />
      <Modal popup={popup} />
      <Search onKeyDown={handleKeyDown} />
      <Views
        results={results}
        statusMsg={statusMsg}
        pageData={pageData}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        onChange={handleOption}
      />
    </div>
  );
};

export default App;
