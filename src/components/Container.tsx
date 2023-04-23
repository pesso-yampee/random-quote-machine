import type { RootState } from "../redux/store";
import { useGetAnimeQuotesQuery } from "../redux/animeQuotesApi";
export function Container() {
  const { data, error, isLoading, isFetching, refetch } =
    useGetAnimeQuotesQuery("one piece");

  return (
    <div className="container">
      <div id="quote-box" className="quoteBox">
        <p className="text">{data?.quote}</p>
        <div id="author" className="author">
          <span>{data?.character}</span>
        </div>
        <div className="flexContainer">
          <button type="button" className="btn primary" onClick={refetch}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}
