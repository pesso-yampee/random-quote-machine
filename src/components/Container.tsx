import type { RootState } from "../redux/store";
import { useGetAnimeQuotesQuery } from "../redux/animeQuotesApi";
import LoadingIcons from "react-loading-icons";
export function Container() {
  const { data, error, isLoading, isFetching, refetch } =
    useGetAnimeQuotesQuery("one piece");

  return (
    <div className="container">
      <div id="quote-box" className="quoteBox">
        {isLoading || isFetching ? (
          <LoadingIcons.ThreeDots fill="#228b22" speed={0.75} />
        ) : (
          <>
            <p className="text">{data?.quote}</p>
            <div id="author" className="author">
              <span>{data?.character}</span>
            </div>
          </>
        )}
        <div className="flexContainer">
          <button type="button" className="btn primary" onClick={refetch}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}
