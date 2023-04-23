import { useSelector } from "react-redux";
import { NewQuoteButton } from "./NewQuoteButton";
import { Author } from "./Author";
import { QuoteBox } from "./QuoteBox";
import { Text } from "./Text";
import { Line } from "./Line";
import { Twitter } from "./Twitter";
import type { RootState } from "../redux/store";
import { useGetAnimeQuotesQuery } from "../redux/animeQuotesApi";
export function Container() {
  const { data, error, isFetching } = useGetAnimeQuotesQuery("one piece");

  return (
    <div className="container">
      <QuoteBox
        Author={<Author text={data?.character} />}
        NewQuoteButton={<NewQuoteButton />}
        Text={<Text text={data?.quote} />}
        Line={<Line />}
        Twitter={<Twitter link="#" />}
      />
    </div>
  );
}
