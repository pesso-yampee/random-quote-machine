type Props = {
	Author: JSX.Element;
	NewQuoteButton: JSX.Element;
	Text: JSX.Element;
	Tumblr: JSX.Element;
	Twitter: JSX.Element;
};

export function QuoteBox(props: Props) {
	const { Author, NewQuoteButton, Text, Tumblr, Twitter } = props;
	return (
		<div id="quote-box" className="quoteBox">
			{Text}
			{Author}
			<div className="flexContainer">
				{Twitter}
				{Tumblr}
				{NewQuoteButton}
			</div>
		</div>
	);
}
