import React from 'react';
import NotFound from './NotFound';
import Results from './Results';
import Loading from './Loading';

const Views = ({ results, statusMsg, pageData, reqBody, setReqBody }) => {
  // when there is a server/client error
  if (statusMsg === 'error') {
    return null;
  }

  // when there are no results to view/ invalid search query
  if (statusMsg === 'No matches for your search.') {
    return <NotFound />;
  }

  //when results are found/ valid query
  if (results.length > 0) {
    return (
      <Results
        results={results}
        pageData={pageData}
        reqBody={reqBody}
        setReqBody={setReqBody}
      />
    );
  }

  return <Loading />;
};

export default Views;
