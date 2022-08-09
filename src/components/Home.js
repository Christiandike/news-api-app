import React from 'react';
import { useNavigate } from 'react-router-dom';
import searchIll from '../media/10.svg';
import sportIll from '../media/12.svg';
import bizIll from '../media/13.svg';
import showIll from '../media/2.svg';
import ukrIll from '../media/3.svg';
import ResultGroup from './ResultGroup';
import {
  sports,
  business,
  ukraine,
  movies,
  getKeyword,
} from '../utils/keywords';

const Home = ({ setQuery }) => {
  const navigate = useNavigate();

  //the function sets the keyword and
  //navigate to the results route for viewing
  const setNav = (keyword) => {
    setTimeout(() => {
      setTimeout(() => {
        setQuery(getKeyword(keyword));
      });
      navigate('/results');
    });
  };

  const handleSports = () => setNav(sports);

  const handleUkraine = () => setNav(ukraine);

  const handleMovies = () => setNav(movies);

  const handleBusiness = () => setNav(business);

  return (
    <div className='home-wrap' id='home'>
      <h1>
        Stay <span className='red'>up to date</span> on your favourite{' '}
        <span className='red'>topics</span>, people and interests
        <span className='red'>.</span>
      </h1>

      <div className='img-wrap'>
        <img src={searchIll} />
      </div>

      <div className='home-main'>
        <div className='home-main1'>
          <ResultGroup
            summary='Always stay one step ahead with all the latest business updates.'
            btnText='Business News'
            onClick={handleBusiness}
            src={bizIll}
          />
        </div>

        <div className='home-main2'>
          <ResultGroup
            summary='Be in sync with alll your favourite sports and events.'
            btnText='Sports News'
            onClick={handleSports}
            src={sportIll}
          />
        </div>

        <div className='home-main3'>
          <ResultGroup
            summary='Never miss a thing about the movies and TV shows you love.'
            btnText='Movies & TV'
            onClick={handleMovies}
            src={showIll}
          />
        </div>

        <div className='home-main4'>
          <ResultGroup
            summary='Follow all the events and stories in Ukraine as they happen.'
            btnText='Ukraine'
            onClick={handleUkraine}
            src={ukrIll}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
