import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Views from './components/Views';
import Home from './components/Home';
import TopMenu from './components/TopMenu';
import SideMenu from './components/SideMenu';
import Search from './components/Search';

const App = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [query, setQuery] = useState('');
  const [statusMsg, setStatusMsg] = useState('');
  const [results, setResults] = useState([]);

  const [pageData, setPageData] = useState({
    page: '',
    totalPages: '',
  });

  const [reqBody, setReqBody] = useState({
    method: 'GET',
    url: 'https://free-news.p.rapidapi.com/v1/search',
    params: { q: query, lang: 'en', page: '1' },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_NEWS_API_KEY,
      'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
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

  return (
    <Router>
      <div className='app-wrap'>
        <TopMenu setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
        <SideMenu toggleMenu={toggleMenu} />
        <Search setQuery={setQuery} />

        <Routes>
          <Route path='/' element={<Home setQuery={setQuery} />} />
          <Route
            path='/results'
            element={
              <Views
                results={results}
                statusMsg={statusMsg}
                pageData={pageData}
                reqBody={reqBody}
                setReqBody={setReqBody}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
