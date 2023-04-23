type Props = {
  Author: JSX.Element;
  NewQuoteButton: JSX.Element;
  Text: JSX.Element;
};

export function QuoteBox(props: Props) {
  const { Author, NewQuoteButton, Text } = props;
  return (
    <div id="quote-box" className="quoteBox">
      {Text}
      {Author}
      <div className="flexContainer">{NewQuoteButton}</div>
    </div>
  );
}
