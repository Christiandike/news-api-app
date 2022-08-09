import React from 'react';
import Pagination from './Pagination';
import ResultGroup from './ResultGroup';

const Results = ({ pageData, results, reqBody, setReqBody }) => {
  const handleOption = (e) => {
    setReqBody({
      ...reqBody,
      params: {
        ...reqBody.params,
        page: String(e.target.value),
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

  const handleNext = () => {
    setReqBody({
      ...reqBody,
      params: {
        ...reqBody.params,
        page: String(+reqBody.params.page + 1),
      },
    });
  };

  return (
    <div className='results-view'>
      {results.map((result) => (
        <ResultGroup
          key={result._id}
          src={result.media}
          href={result.link}
          title={result.title}
          summary={result.summary.substring(0, 200) + '...'}
          tags={result.topic}
          btnText='Read More'
          target='_blank'
        />
      ))}

      <Pagination
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        onChange={handleOption}
        pageData={pageData}
      />
    </div>
  );
};

export default Results;
