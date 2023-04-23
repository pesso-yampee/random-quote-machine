import { useGetAnimeQuotesQuery } from "../redux/animeQuotesApi";

export function NewQuoteButton() {
  const { data, error, isFetching } = useGetAnimeQuotesQuery("one piece");
	
	return (
		<button
			type="button"
			className="btn primary"
			// onClick={dispatch()}
		>
			New Quote
		</button>
	);
}
