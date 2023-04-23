type Props = {
	Author: JSX.Element;
	NewQuoteButton: JSX.Element;
	Text: JSX.Element;
	Line: JSX.Element;
	Twitter: JSX.Element;
};

export function QuoteBox(props: Props) {
	const { Author, NewQuoteButton, Text, Line, Twitter } = props;
	return (
		<div id="quote-box" className="quoteBox">
			{Text}
			{Author}
			<div className="flexContainer">
				{Twitter}
				{Line}
				{NewQuoteButton}
			</div>
		</div>
	);
}
