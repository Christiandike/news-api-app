import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./components/Modal";
import Views from "./components/Views";
import Search from "./components/Search";
import Header from "./components/Header";
import Loading from "./components/LoadingView";

const App = () => {
  const [popup, setPopup] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [statusMsg, setStatusMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pageData, setPageData] = useState({
    page: "",
    totalPages: "",
  });
  const [reqBody, setReqBody] = useState({
    method: "GET",
    url: "https://free-news.p.rapidapi.com/v1/search",
    params: { q: query, lang: "en", page: "1" },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_NEWS_API_KEY,
      "X-RapidAPI-Host": "free-news.p.rapidapi.com",
    },
  });

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
      setIsLoading(true);
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
    setReqBody({
      ...reqBody,
      params: {
        ...reqBody.params,
        page: String(e.target.value),
      },
    });
  };

  const handleSports = () => {
    const sports = [
      "premier league",
      "sports",
      "football",
      "basketball",
      "wwe",
      "tennis",
      "sports news",
      "world cup",
      "esports",
    ];
    const sportsQuery = sports[Math.floor(Math.random() * sports.length)];
    console.log(sportsQuery);
    setQuery(sportsQuery);
  };

  const handleBusiness = () => {
    const business = [
      "business news",
      "stock market",
      "inflation",
      "economics",
      "world trade",
      "commerce",
      "financial times",
      "bloomberg news",
      "global trade",
      "central bank",
      "the economy",
      "cryptocurrency",
      "stocks",
      "finance",
      "venture capital",
      "VC",
      "markets",
    ];
    const businessQuery = business[Math.floor(Math.random() * business.length)];
    setQuery(businessQuery);
  };

  const handleMovies = () => {
    const movies = [
      "latest movies",
      "box office",
      "blockbuster",
      "netflix",
      "movies",
    ];
    const moviesQuery = movies[Math.floor(Math.random() * movies.length)];
    setQuery(moviesQuery);
  };

  const handleUkraine = () => {
    const ukraine = [
      "ukraine war",
      "russia ukraine",
      "russia war",
      "putin zelensky",
      "kyiv",
      "zelensky",
      "russia ukraine war",
      "zelensky ukraine",
    ];
    const ukraineQuery = ukraine[Math.floor(Math.random() * ukraine.length)];
    setQuery(ukraineQuery);
  };

  return (
    <div className="app-wrapper">
      <Header onClick={handlePopup} />
      <Modal popup={popup} />
      <Search onKeyDown={handleKeyDown} />
      <Loading isLoading={isLoading} />
      <Views
        results={results}
        statusMsg={statusMsg}
        pageData={pageData}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        onChange={handleOption}
        handleBusiness={handleBusiness}
        handleUkraine={handleUkraine}
        handleMovies={handleMovies}
        handleSports={handleSports}
        setIsLoading={setIsLoading}
      />
    </div>
  );
};

export default App;
