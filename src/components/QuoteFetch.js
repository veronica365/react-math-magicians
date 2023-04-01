import { useEffect, useState } from 'react';
import fetchQuotes from '../logic/fetchQuotes';
import Quote from './Quote';
import ErrorOrLoading from './ErrorOrLoading';

function QuoteFetch() {
  const [state, setQuotes] = useState({ loading: true });
  useEffect(() => {
    const getResults = async () => {
      const [result] = await (await fetchQuotes()).json();
      if (result) return setQuotes(result);
      return setQuotes({ loading: null });
    };
    getResults();
  }, []);
  return (
    <div className="wrapper">
      <ErrorOrLoading loading={state.loading} error={state?.loading === null} />
      {state.author && <Quote quote={state.quote} author={state.author} />}
    </div>
  );
}

export default QuoteFetch;
